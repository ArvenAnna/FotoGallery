const routesModule = require('../constants/routes');
const modelsModule = require('./schems');

const Album = modelsModule.Album;
const Foto = modelsModule.Foto;

const mkdirp = require('mkdirp');
const fs = require("fs.promised");


const endpoints =  (app) => {

    app.get(routesModule.routes.GET_ALBUMS, function(req, res){
        console.log("get albums called from proxy");
        if (req.query.search) {
            Album.find({$text: {$search: req.query.search}})
                .then(foundAlbums => Foto.find({$text: {$search: req.query.search}})
                    .then(foundFotos => {
                            const additionalAlbumPromises = foundFotos.map(f => f.album)
                                .filter(a => !foundAlbums.map(fa => fa._id).includes(a))
                                .map(id => Album.findById(id));
                            Promise.all(additionalAlbumPromises)
                                .then(additionalAlbums => {
                                    const allAlbums = [...foundAlbums, ...additionalAlbums];
                                    const promises = allAlbums.map(album =>  Foto.find({ album : album._id }));
                                    Promise.all(promises).then(fotos => {
                                        for(let i = 0; i < fotos.length; i++) {
                                            allAlbums[i].images = fotos[i];
                                        }

                                        res.send({albums: allAlbums.slice(parseInt(req.query.offset), parseInt(req.query.offset) + parseInt(req.query.limit)), count: allAlbums.length});
                                    }).catch(e => res.status(500).send({error: "Error during extracting fotos for found albums"}));
                                })
                                .catch(e => res.status(500).send({error: "Error during extracting albums for found fotos"}))

                        })
                    .catch(e => res.status(500).send({error: "Error during searching among fotos"})))
                .catch(e => res.status(500).send({error: "Error during searching among albums"}));

        } else {
            Album.paginate({}, {offset: parseInt(req.query.offset), limit: parseInt(req.query.limit)}).then(result => {
                var albums  = result.docs;
                const promises = result.docs.map(album =>  Foto.find({ album : album._id }));
                Promise.all(promises).then(fotos => {
                    for(let i = 0; i < fotos.length; i++) {
                          albums[i].images = fotos[i];
                    }
                    res.send({albums, count: result.total});
                }).catch(e => res.status(500).send({error: "Error during fetching fotos for found albums"}));
            }).catch(e => res.status(500).send({error: "Error during fetching albums"}));;
        }
    });


    app.get(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("get album called from proxy");

        Album.findById(req.query.id).then(album => {
            Foto.find({ album : album._id })
                .then(fotos => {
                    album.images = fotos;
                    res.send(album);
                })
                .catch(e => res.status(500).send({error: "Error during fetching foto for found album"}));
        }).catch(e => res.status(500).send({error: "Error during fetching album"}));
    });

    app.delete(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("delete album called from proxy");

        Foto.find({album: req.query.id})
            .then(fotos => {
                const deletePromises = fotos.map(f => fs.unlink(__dirname + '/../' + f.src));
                Promise.all(deletePromises)
                    .then(() => {
                        console.log('Deletion sucessful.');
                        fs.rmdir(__dirname + '/../foto/' + req.query.id)
                            .then(() => console.log('Empty directory removed.'));
                        // only this way trigger cascade deletion middleware
                        return Album.findById(req.query.id)
                            .then(a => {
                                a.remove();
                                res.send(req.query.id)
                            }).catch(e => res.status(500).send({error: "Error during removing foto information"}));
                    })
                    .catch(e => res.status(500).send({error: "Error during deleting foto file"}));
            })
            .catch(e => res.status(500).send({error: "Error during delete: searching fotos for album failed"}));
    });

    app.post(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("create album called from proxy");

        const newAlbum = new Album({
            description: req.body.description,
            name: req.body.name
        });

        newAlbum.save().then(savedAlbum => {
            const newFoto = new Foto({
                name: '',
                src: req.body.src,
                text: '',
                order: 1,
                album: newAlbum._id
            });

            newFoto.save().then(foto => {
                const splitArray = req.body.src.split('.');
                const format = splitArray[splitArray.length - 1];

                const oldPath = __dirname + '/..' + req.body.src;
                const newDir = __dirname + '/../foto/' + savedAlbum._id;
                const newPath = newDir + '/' + foto._id + '.' + format;
                const relativePath = '/foto/' + savedAlbum._id + '/' + foto._id + '.' + format;

                mkdirp(newDir, function (err) {
                    if (err) res.status(500).send({error: "Error during creating folder for new album"});
                    fs.rename(oldPath, newPath).then(() => {
                        console.log('Successfully renamed - AKA moved!');

                        Foto.findByIdAndUpdate(foto._id, {src: relativePath}, {new: true})
                            .then(uf => {
                                savedAlbum.images = [uf];
                                res.send(savedAlbum);
                        }).catch(e => res.status(500).send({error: "Error during saving new album"}));
                    }).catch(e => res.status(500).send({error: "Error during moving album's main foto to the folder"}));
                });
            });
        }).catch(e => res.status(500).send({error: "Error during saving new foto"}));
    });

    app.put(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("update album called from proxy");
        Album.findByIdAndUpdate(req.body._id, {name: req.body.name, description:req.body.description})
            .then(updatedAlbum => {
                Foto.find({ album : updatedAlbum._id })
                    .then(fotos => {
                        updatedAlbum.images = fotos;
                        res.send(updatedAlbum);
                    })
                    .catch(e => res.status(500).send({error: "Error during fetching updated album"}));
            })
            .catch(e => res.status(500).send({error: "Error during updating album"}));
    });

    app.put(routesModule.routes.UPDATE_ITEMS_ORDER, function(req, res){
        console.log("update items called from proxy");

        const updatePromises = req.body.images.map(image =>
            Foto.findByIdAndUpdate(image._id, {order: image.order}, {new: true}));

        Promise.all(updatePromises)
            .then(fotos => {
                let updatedAlbum = req.body;
                updatedAlbum.images = fotos;
                res.send(updatedAlbum);
            })
            .catch(e => res.status(500).send({error: "Error during updating foto's order"}));
    });

};

exports.Endpoints = endpoints;