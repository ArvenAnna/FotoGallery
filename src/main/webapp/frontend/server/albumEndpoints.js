const routesModule = require('../constants/routes');
const modelsModule = require('./schems');

const Album = modelsModule.Album;
const Foto = modelsModule.Foto;

//const fs = require('fs');
const mkdirp = require('mkdirp');

const fs = require("fs.promised");



const endpoints =  (app) => {

    app.get(routesModule.routes.GET_ALBUMS, function(req, res){
        console.log("get albums called from proxy");

        if (req.query.search) {
            Album.find({$text: {$search: req.query.search}})
                .then(foundAlbums => Foto.find({$text: {$search: req.query.search}})
                        .then(foundFotos => {
                            console.dir(foundFotos);
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
                                        res.send(allAlbums);
                                    })
                                })

                        }));
                // .skip(20)
                // .limit(10)
                // for pagination
        } else {
            Album.find().then(albums => {
                const promises = albums.map(album =>  Foto.find({ album : album._id }));
                Promise.all(promises).then(fotos => {
                    for(let i = 0; i < fotos.length; i++) {
                        albums[i].images = fotos[i];
                    }
                    res.send(albums);
                });
            });
        }
    });


    app.get(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("get album called from proxy");

        Album.findById(req.query.id).then(album => {
            Foto.find({ album : album._id })
                .then(fotos => {
                    album.images = fotos;
                    res.send(album);
                });
        });
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
                            });
                    });
            });
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
                const oldPath = __dirname + '/..' + req.body.src;
                const newDir = __dirname + '/../foto/' + savedAlbum._id;
                const newPath = newDir + '/' + foto._id + '.jpg';
                const relativePath = '/foto/' + savedAlbum._id + '/' + foto._id + '.jpg';

                mkdirp(newDir, function (err) {
                    if (err) throw err;
                    fs.rename(oldPath, newPath).then(() => {
                        console.log('Successfully renamed - AKA moved!');

                        Foto.findByIdAndUpdate(foto._id, {src: relativePath}, {new: true})
                            .then(uf => {
                                savedAlbum.images = [uf];
                                res.send(savedAlbum);
                        });
                    });
                });
            });
        });
    });

    app.put(routesModule.routes.ALBUM_ROUTE, function(req, res){
        console.log("update album called from proxy");
        Album.findByIdAndUpdate(req.body._id, {name: req.body.name, description:req.body.description})
            .then(updatedAlbum => {
                Foto.find({ album : updatedAlbum._id })
                    .then(fotos => {
                        updatedAlbum.images = fotos;
                        res.send(updatedAlbum);
                    });
            });
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
            });
    });

};

exports.Endpoints = endpoints;