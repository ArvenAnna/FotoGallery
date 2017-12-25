const express = require('express');
const routes = require('./constants/routes');
const albums = require('./mocks/Albums');

const app = express();

app.get(routes.routes.GET_ALBUMS, function(req, res){
  console.log("get albums called from proxy");
  res.send(albums.albums);
});

// app.get('/api/ss', function(req, res){
//   console.log("api called from proxy");
//   res.send("Hello world from ss!!");
// });

app.set('port', 4000);

app.listen(app.get('port'), function() {
  console.log('Node App Started');
});