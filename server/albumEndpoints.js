const routesModule = require('../constants/routes');
const modelsModule = require('./schems');

const Album = modelsModule.Album;
const Foto = modelsModule.Foto;
const { badRequest, serverError, ok, moveFile } = require('./utils');

const mkdirp = require('mkdirp');
const fs = require("fs.promised");
const { fotoDir } = require('./constants');


function search(req, res) {
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
                            ok(res, {albums: allAlbums.slice(parseInt(req.query.offset), parseInt(req.query.offset) + parseInt(req.query.limit)), count: allAlbums.length});
                        }).catch(e => serverError(res,  "Error during extracting fotos for found albums", e));
                    })
                    .catch(e => serverError(res, "Error during extracting albums for found fotos", e))

            })
            .catch(e => serverError(res, "Error during searching among fotos", e)))
        .catch(e => serverError(res, "Error during searching among albums", e));
}

const endpoints =  (app) => {

    app.get(routesModule.routes.GET_ALBUMS, (req, res) => {
        if (req.query.search) {
            search(req, res);
        } else {
            Album.paginate({}, {offset: parseInt(req.query.offset), limit: parseInt(req.query.limit)})
                .then(result => {
                    let albums  = result.docs;
                    const promises = result.docs.map(album =>  Foto.find({ album : album._id }));
                    Promise.all(promises)
                        .then(fotos => {
                            for (let i = 0; i < fotos.length; i++) {
                                albums[i].images = fotos[i];
                            }
                            ok(res, {albums, count: result.total});
                    }).catch(e => serverError(res, "Error during fetching fotos for found albums", e));
            }).catch(e => serverError(res, "Error during fetching albums", e));
        }
    });


    app.get(routesModule.routes.ALBUM_ROUTE, (req, res) => {
        Album.findById(req.query.id)
            .then(album => Foto.find({ album : album._id })
                .then(fotos => {
                    album.images = fotos;
                    ok(res, album);
                })
                .catch(e => serverError(res, "Error during fetching foto for found album", e)))
            .catch(e => serverError(res, "Error during fetching album", e));
    });

    app.delete(routesModule.routes.ALBUM_ROUTE, (req, res) => {
        // only this way trigger cascade deletion middleware
        Album.findById(req.query.id)
            .then(a => Foto.find({album: req.query.id})
                    .then(fotos => {
                        const deletePromises = fotos.map(f => fs.unlink(__dirname + '/../' + f.src));
                        Promise.all(deletePromises)
                            .then(() => fs.rmdir(__dirname + '/../' + fotoDir + '/' + req.query.id)
                                .then(() => {
                                    a.remove();
                                    ok(res, req.query.id);
                                })
                                .catch(e => serverError(res, "Failed remove empty directory", e)))
                            .catch(e => serverError(res, "Error during deleting foto file", e));
                    })
                    .catch(e => serverError(res, "Error during delete: searching fotos for album failed", e)))
            .catch(e => serverError(res, "Error during removing foto information", e))
    });

    app.post(routesModule.routes.ALBUM_ROUTE, (req, res) => {
        if (!req.body.src || !req.body.name || ! req.body.description) return badRequest(res, 'No album info was sent');

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
                const newDir = __dirname + '/../' + fotoDir + '/' + savedAlbum._id;
                const newPath = newDir + '/' + foto._id + '.' + format;
                const relativePath = '/' + fotoDir + '/' + savedAlbum._id + '/' + foto._id + '.' + format;

                mkdirp(newDir, err => {
                    if (err) return serverError(res, "Error during creating folder for new album", err);

                    const callback = () => Foto.findByIdAndUpdate(foto._id, {src: relativePath}, {new: true})
                        .then(uf => {
                            savedAlbum.images = [uf];
                            res.send(savedAlbum);
                        }).catch(e => serverError(res, "Error during saving new album", e));

                    moveFile(oldPath, newPath, res, callback);

                });
            }).catch(e => serverError(res, "Error during saving new foto", e));
        }).catch(e => serverError(res, "Error during saving new album", e));
    });

    app.put(routesModule.routes.ALBUM_ROUTE, function(req, res){
        if (!req.body._id) return badRequest(res, 'No album id was sent');

        Album.findByIdAndUpdate(req.body._id, {name: req.body.name, description:req.body.description})
            .then(updatedAlbum =>
                Foto.find({ album : updatedAlbum._id })
                    .then(fotos => {
                        updatedAlbum.images = fotos;
                        ok(res, updatedAlbum);
                    })
                    .catch(e => serverError(res, "Error during fetching updated album", e)))
            .catch(e => serverError(res, "Error during updating album", e));
    });

    app.put(routesModule.routes.UPDATE_ITEMS_ORDER, (req, res) => {
        if (!req.body.images) return badRequest(res, 'No images were sent');

        const updatePromises = req.body.images.map(image =>
            Foto.findByIdAndUpdate(image._id, {order: image.order}, {new: true}));

        Promise.all(updatePromises)
            .then(fotos => ok(res, {images: fotos}))
            .catch(e => serverError(res, "Error during updating foto's order", e));
    });

};

exports.Endpoints = endpoints;