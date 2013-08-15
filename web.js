var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  var string = buf.toString('utf8');
  response.send(string);
});
var port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
