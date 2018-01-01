const express = require('express');
const routesModule = require('./constants/routes');
const albumsModule = require('./mocks/Albums');

const app = express();

app.get(routesModule.routes.GET_ALBUMS, function(req, res){
  console.log("get albums called from proxy");
  res.send(albumsModule.albums);
});

// app.get('/api/ss', function(req, res){
//   console.log("api called from proxy");
//   res.send("Hello world from ss!!");
// });

app.set('port', 4000);

app.listen(app.get('port'), function() {
  console.log('Node App Started');
});