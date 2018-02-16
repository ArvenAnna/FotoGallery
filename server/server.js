const express = require('express');
const bodyParser = require('body-parser');
//const fileUpload = require('express-fileupload');
const path = require('path');

const routesModule = require('../constants/routes');
const album = require('./albumEndpoints');
const foto = require('./fotoEndpoints');
const { badRequest, serverError, ok } = require('./utils');
const { tempDir, dbName } = require('./constants');

const expressLogging = require('express-logging');
const logger = require('logops');
const mongoose = require('mongoose');

// for file uploading
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../' + tempDir + '/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const uploading = multer({
    storage: storage,
}).single('file');

const app = express();
app.use(expressLogging(logger));

const args = process.argv.slice(2);
const dbHost = args[0];

const mongoDB = 'mongodb://' + dbHost + '/' + dbName;
mongoose.connect(mongoDB, {});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());


album.Endpoints(app);
foto.Endpoints(app);


app.post(routesModule.routes.UPLOAD_FOTO, (req, res) => {
    uploading(req, res, function (err) {
        if(err) serverError(res, "Error during uploading file", err);
        ok(res, {src: '/' + tempDir + '/' + req.file.originalname})
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