//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AlbumModelSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    images: [{type: Schema.Types.ObjectId, ref: 'Foto'}]
});

var FotoModelSchema = new Schema({
    id: Number,
    name: String,
    src: String,
    text: String,
    order: Number,
    album: {type: Schema.Types.ObjectId, ref:'Album'}
});

// Compile model from schema

exports.Album = mongoose.model('Album', AlbumModelSchema );
exports.Foto = mongoose.model('Foto', FotoModelSchema );