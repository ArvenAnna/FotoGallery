const routesModule = require('../constants/routes');
const modelsModule = require('./schems');
const { badRequest, serverError, ok, moveFile } = require('./utils');
const { fotoDir } = require('./constants');

const Foto = modelsModule.Foto;

const fs = require('fs');

const endpoints =  (app) => {
    app.post(routesModule.routes.FOTO_ROUTE, (req, res) => {

        Foto.find({album: req.body.album})
            .then(fotos => {
                const maxOrder = fotos.map(foto => foto.order).reduce((a, b) => Math.max(a, b));

                const newFoto = new Foto({
                    src: req.body.src,
                    text: '',
                    name: '',
                    order: maxOrder + 1,
                    album: req.body.album
                });

                newFoto.save()
                    .then(savedFoto => {
                        const oldPath = __dirname + '/..' + req.body.src;
                        const splitArray = req.body.src.split('.');
                        const format = splitArray[splitArray.length - 1];
                        const newPath = __dirname + '/../' + fotoDir + '/' + req.body.album + '/' + savedFoto._id + '.' + format;
                        const relativePath = '/' + fotoDir + '/' + req.body.album + '/' + savedFoto._id + '.' + format;

                        const callback = () => Foto.findByIdAndUpdate(savedFoto._id, {src: relativePath}, {new: true})
                            .then(uf => ok(res, uf))
                            .catch(e => serverError(res, "Error during adding foto to album", e));

                        moveFile(oldPath, newPath, res, callback);

                }).catch(e => serverError(res, "Error during saving foto", e));
            }).catch(e => serverError(res, "Error during finding album for foto insertion", e));
    });

    app.delete(routesModule.routes.FOTO_ROUTE, (req, res) => {

        Foto.findById(req.query.id)
            .then(foundFoto => foundFoto.remove()
                    .then(() => fs.unlink(__dirname + '/../' + foundFoto.src,  e => {
                            if (e) return serverError(res, "Error during removing foto file", e);
                            ok(res, req.query.id);
                        }))
                    .catch(e => serverError(res, "Error during foto information deletion", e)))
            .catch(e => serverError(res, "Error during finding foto for deletion", e));

        // todo normalize order
    });

    app.put(routesModule.routes.FOTO_ROUTE, (req, res) => {
        if (!req.body._id) return badRequest(res, 'No foto id was sent');

        Foto.findByIdAndUpdate(req.body._id, {name: req.body.name, text:req.body.text, position: req.body.position}, {new: true})
            .then(updatedFoto => ok(res, updatedFoto))
            .catch(e => serverError(res, "Error during updating foto desription", e));
    });
}

exports.Endpoints = endpoints;