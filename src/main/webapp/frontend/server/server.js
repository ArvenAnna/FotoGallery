const express = require('express');
const routesModule = require('../constants/routes');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const album = require('./albumEndpoints');
const foto = require('./fotoEndpoints');

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

album.Endpoints(app);
foto.Endpoints(app);

app.post(routesModule.routes.UPLOAD_FOTO, function(req, res){
    console.log("upload foto called from proxy");
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    let sampleFile = req.files.file;

    // Use the mv() method to place the file somewhere on your server
     sampleFile.mv('tempfiles/' + sampleFile.name, function(err) {
        if (err)
            return res.status(500).send(err);

         res.send({src: '/tempfiles/' + sampleFile.name});
    });
});

const Jimp = require("jimp");

app.put(routesModule.routes.ROTATE_FOTO, function (req, res) {
    console.log('rotate foto called from proxy');

    Jimp.read(__dirname + '/..' + req.body.src).then(lenna => {
        lenna.rotate(90)
            .write(__dirname + '/..' + req.body.src, function() {
                console.log('-------------');
                res.send({f: 'f'});
            }); // save

    }).catch(function (err) {
        res.status(500);
    });
})

app.set('port', 4000);

app.listen(app.get('port'), function() {
    console.log('Node App Started');
});