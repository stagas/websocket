
var http = require('http');
var express = require('express');
var WebSocketServer = require('ws').Server;

var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname+'/../'));

var server = http.createServer(app);
server.listen(8080);

var ws = new WebSocketServer({ server: server });

ws.on('connection', function(socket){
  socket.id = ((Math.random()*10e6) | 0).toString(36);
  console.log('connected:', socket.id);
  socket.on('message', function(message){
    console.log('received: %s: %s', socket.id, message);
  });
  socket.on('close', function(){
    console.log('closed:', socket.id);
  });
  socket.on('error', function(){
    console.log('error:', socket.id);
  });
  socket.send('hello from server');
});
