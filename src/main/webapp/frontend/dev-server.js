const express = require('express');
const routesModule = require('./constants/routes');
const albumsModule = require('./mocks/Albums');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.get(routesModule.routes.GET_ALBUMS, function(req, res){
  console.log("get albums called from proxy");
  res.send(albumsModule.albums);
});

app.get(routesModule.routes.ALBUM_ROUTE, function(req, res){
    console.log("get album called from proxy");
    const foundAlbum = albumsModule.albums.find(album => album.id == req.query.id);
    res.send(foundAlbum);
});

app.delete(routesModule.routes.FOTO_PATH, function(req, res){
    console.log("delete foto called from proxy");
    const foundAlbum = albumsModule.albums.find(album => album.id == req.query.album);
    const deletedFoto = foundAlbum.images.find(picture => picture.id == req.query.id);
    res.send(deletedFoto);
});

app.put(routesModule.routes.FOTO_PATH, function(req, res){
    console.log("update foto called from proxy");
    console.dir(req.body);
    res.send(req.body);
});

app.set('port', 4000);

app.listen(app.get('port'), function() {
  console.log('Node App Started');
});