const routesModule = require('../constants/routes');
const modelsModule = require('./schems');

const Foto = modelsModule.Foto;

const fs = require('fs');

const endpoints =  (app) => {
    app.post(routesModule.routes.FOTO_ROUTE, function(req, res){
        console.log("create foto called from proxy");

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

                newFoto.save().then(savedFoto => {
                    const oldPath = __dirname + '/..' + req.body.src;
                    const newPath = __dirname + '/../foto/' + req.body.album + '/' + savedFoto._id + '.jpg';
                    const relativePath = '/foto/' + req.body.album + '/' + savedFoto._id + '.jpg';

                    fs.rename(oldPath, newPath, function (e) {
                        if (e) throw e;
                        console.log('Successfully renamed - AKA moved!');

                        Foto.findByIdAndUpdate(savedFoto._id, {src: relativePath}, {new: true}).then(uf => {
                            res.send(uf);
                        });
                    });
                });
            });
    });

    app.delete(routesModule.routes.FOTO_ROUTE, function(req, res){
        console.log("delete foto called from proxy");

        Foto.findById(req.query.id)
            .then(foundFoto => {
                fs.unlink(__dirname + '/../' + foundFoto.src, function (err) {
                    if (err) throw err;
                    console.log('Deletion sucessful.');
                    foundFoto.remove().then(() => res.send(req.query.id));
                });
            });

        // todo normalize order
    });

    app.put(routesModule.routes.FOTO_ROUTE, function(req, res){
        console.log("update foto called from proxy");

        Foto.findByIdAndUpdate(req.body._id, {name: req.body.name, text:req.body.text}, {new: true})
            .then(updatedFoto => {
                res.send(updatedFoto);
            });

    });
}

exports.Endpoints = endpoints;