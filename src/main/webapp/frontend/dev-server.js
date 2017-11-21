const express = require('express');

const app = express();
// Import routes

//require('./_routes')(app);   // <-- or whatever you do to include your API endpoints and middleware

app.get('/api/dd', function(req, res){
  console.log("api called from proxy");
  res.send("Hello world from dd!!");
});

app.get('/api/ss', function(req, res){
  console.log("api called from proxy");
  res.send("Hello world from ss!!");
});

app.set('port', 4000);

app.listen(app.get('port'), function() {
  console.log('Node App Started');
});