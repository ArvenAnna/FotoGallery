//Require Mongoose
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

//Define a schema
var Schema = mongoose.Schema;

var AlbumModelSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    images: [{type: Schema.Types.ObjectId, ref: 'Foto'}]
});
AlbumModelSchema.plugin(mongoosePaginate);

AlbumModelSchema.index({'$**': 'text'});

var FotoModelSchema = new Schema({
    id: Number,
    name: String,
    src: String,
    text: String,
    order: Number,
    album: {type: Schema.Types.ObjectId, ref:'Album'}
});
FotoModelSchema.plugin(mongoosePaginate);

FotoModelSchema.index({'$**': 'text'});

const album = mongoose.model('Album', AlbumModelSchema );
const foto = mongoose.model('Foto', FotoModelSchema );

AlbumModelSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    foto.remove({album: this._id}).exec();
    next();
});

// Compile model from schema

exports.Album = album;
exports.Foto = foto;