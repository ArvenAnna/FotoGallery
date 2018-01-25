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

                newFoto.save()
                    .then(savedFoto => {
                    const oldPath = __dirname + '/..' + req.body.src;

                    const splitArray = req.body.src.split('.');
                    const format = splitArray[splitArray.length - 1];


                    const newPath = __dirname + '/../foto/' + req.body.album + '/' + savedFoto._id + '.' + format;
                    const relativePath = '/foto/' + req.body.album + '/' + savedFoto._id + '.' + format;

                    fs.rename(oldPath, newPath, function (e) {
                        if (e) res.status(500).send({error: "Error during creating foto file"});
                        console.log('Successfully renamed - AKA moved!');

                        Foto.findByIdAndUpdate(savedFoto._id, {src: relativePath}, {new: true})
                            .then(uf => res.send(uf))
                            .catch(e => res.status(500).send({error: "Error during adding foto to album"}));
                    });
                })
                    .catch(e => res.status(500).send({error: "Error during saving foto"}));
            })
            .catch(e => res.status(500).send({error: "Error during finding album for foto insertion"}));
    });

    app.delete(routesModule.routes.FOTO_ROUTE, function(req, res){
        console.log("delete foto called from proxy");

        Foto.findById(req.query.id)
            .then(foundFoto => {
                fs.unlink(__dirname + '/../' + foundFoto.src, function (err) {
                    if (err) res.status(500).send({error: "Error during removing foto file"});
                    console.log('Deletion sucessful.');
                    foundFoto.remove()
                        .then(() => res.send(req.query.id))
                        .catch(e => res.status(500).send({error: "Error during foto information deletion"}));
                });
            })
            .catch(e => res.status(500).send({error: "Error during finding foto for deletion"}));

        // todo normalize order
    });

    app.put(routesModule.routes.FOTO_ROUTE, function(req, res){
        console.log("update foto called from proxy");

        Foto.findByIdAndUpdate(req.body._id, {name: req.body.name, text:req.body.text}, {new: true})
            .then(updatedFoto => {
                res.send(updatedFoto);
            })
            .catch(e => res.status(500).send({error: "Error during updating foto"}));

    });
}

exports.Endpoints = endpoints;