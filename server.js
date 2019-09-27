var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var http = require('http');


var app = express();


app.use(bodyParser.urlencoded({ extended: true }));




const httpServer = http.createServer(app);


var io= require('socket.io').listen(httpServer);

io.on('connection', function (socket) {
var me;
        socket.on('chat',function(user){

           io.sockets.emit('retour', user); 
        });



  socket.on ('position',function(position){
      console.log(position);
      if(position.pageX > 46 && position.pageX <55){
              var message = "tu va où la?";
      }


      socket.emit('marche', message);
  })
      


      });


      
app.listen('8000');
