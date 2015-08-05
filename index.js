var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname +'/public/'});
});
app.use("/", express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function ()  {
   var host = server.address().address;
    var port = server.address().port;

    console.log("example", host, port)
});