const express = require('express');
const routesModule = require('./constants/routes');
const albumsModule = require('../mocks/Albums');
const modelsModule = require('./schems');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

var mongoose = require('mongoose');


var mongoDB = 'mongodb://127.0.0.1/GALLERY';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use(bodyParser.json());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

function handleError(e) {
    console.log('errr!!!!');
}



app.get(routesModule.routes.GET_ALBUMS, function(req, res){
    console.log("get albums called from proxy");
    if(req.query.search) {
        res.send([albumsModule.albums[0]]);
    } else {
        res.send(albumsModule.albums);
    }
});


app.put(routesModule.routes.UPDATE_ITEMS_ORDER, function(req, res){
    console.log("update items called from proxy");
    console.dir(req.body);
    res.send(req.body);
});

app.get(routesModule.routes.ALBUM_ROUTE, function(req, res){
    console.log("get album called from proxy");

    const Album = modelsModule.Album;
    const Foto = modelsModule.Foto;

    Album.find().exec(function(error, albums) {
        if (error) return handleError(error);
        albums.map(album => {

            return Foto.find({ album : album._id })
                .exec(function (err, fotos) {
                    if (err) return handleError(err);
                    album.images = fotos;
                    return album;
                });


        });
    });




    const foundAlbum = albumsModule.albums.find(album => album.id == req.query.id);
    res.send(foundAlbum);
});

app.put(routesModule.routes.ALBUM_ROUTE, function(req, res){
    console.log("update album called from proxy");
    console.dir(req.body);
    res.send(req.body);
});

app.post(routesModule.routes.ALBUM_ROUTE, function(req, res){
    console.log("create album called from proxy");

    const Album = modelsModule.Album;
    const Foto = modelsModule.Foto;


    //find records
    Album.find().exec(function(error, result) {
        if (error) return handleError(error);
    });

    var album = new Album({
        description: 'bla-bla',
        name: 'pict222'
    });

    // Save the new model instance, passing a callback
    album.save(function (err) {
        if (err) return handleError(err);


        var foto = new Foto({
            name: '',
            src: '/foto/download.jpg',
            text: '',
            order: 2,
            album: album._id    // assign the _id from the our author Bob. This ID is created by default!
        });

        foto.save(function (err) {
            if (err) return handleError(err);
            // Bob now has his story
        });
        // saved!
    });


    const newAlbum = req.body;
    newAlbum.images = [{
        id: 6,
        src: '/foto/download.jpg',
        text: 'bla-bla',
        name: 'pict222',
        order: 8
    }];
    newAlbum.id = 8;
    newAlbum.src = null;
    res.send(newAlbum);
});

app.delete(routesModule.routes.ALBUM_ROUTE, function(req, res){
    console.log("delete album called from proxy");
    res.send(req.query.id);
});


app.delete(routesModule.routes.FOTO_ROUTE, function(req, res){
    console.log("delete foto called from proxy");
    const foundAlbum = albumsModule.albums.find(album => album.id == req.query.album);
    const deletedFoto = foundAlbum.images.find(picture => picture.id == req.query.id);
    res.send(deletedFoto);
});

app.put(routesModule.routes.FOTO_ROUTE, function(req, res){
    console.log("update foto called from proxy");
    console.dir(req.body);
    res.send(req.body);
});

app.post(routesModule.routes.FOTO_ROUTE, function(req, res){
    console.log("create foto called from proxy");
    console.dir(req.body);
    const newFoto = {
        id: 6,
        src: '/foto/download.jpg',
        text: 'bla-bla',
        name: 'pict222',
        order: 8
    }
    res.send(newFoto);
});

app.post(routesModule.routes.UPLOAD_FOTO, function(req, res){
    console.log("upload foto called from proxy");
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    // sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    //     if (err)
    //         return res.status(500).send(err);
    //
    //     res.send('File uploaded!');
    // });

    res.send({src: '/foto/download.jpg'});
});

app.set('port', 4000);

app.listen(app.get('port'), function() {
    console.log('Node App Started');
});