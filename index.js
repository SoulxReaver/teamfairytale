var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname +'/public/'});
});
app.use("/", express.static(path.join(__dirname, 'public')));



app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function ()  {
   var host = server.address().address;
    var port = server.address().port;

    console.log("example", host, port)
});