const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const routesModule = require('../constants/routes');
const album = require('./albumEndpoints');
const foto = require('./fotoEndpoints');
const { badRequest, serverError, ok } = require('./utils');
const { tempDir } = require('./constants');

const expressLogging = require('express-logging');
const logger = require('logops');
const mongoose = require('mongoose');

const app = express();
app.use(expressLogging(logger));


const mongoDB = 'mongodb://localhost/GALLERY'; //TODO: set from env (in docker env: mongodb://mongo/GALLERY)
mongoose.connect(mongoDB, {});
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


app.post(routesModule.routes.UPLOAD_FOTO, (req, res) => {
    if (!req.files) return badRequest(res, 'No files were uploaded.');

    const uploadedFile = req.files.file;

    uploadedFile.mv(tempDir + '/' + uploadedFile.name, (err) => {
         err
             ? serverError(res, "File uploading failed", err)
             : ok(res, {src: '/' + tempDir + '/' + uploadedFile.name});
    });
});


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')));
app.use('/bin', express.static('bin'));
app.use('/foto', express.static('foto'));
app.use('/sounds', express.static('sounds'));
app.use('/tempfiles', express.static('tempfiles'));
app.use('/svg', express.static('svg'));


app.set('port', 4000);

app.listen(app.get('port'), function() {
    console.log('Node App Started');
});