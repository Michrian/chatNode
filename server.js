var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var http = require('http');


var app = express();


app.use(bodyParser.urlencoded({ extended: true }));



/*


app.get('/api', (req, res) => {

  res.json({
    message: "TEST PERSON"
  })

});



//On créé un groupe que l’on nomme Testons les opérations

  app.post('/api/login', (req, res) => {
    //mock
    var obj = req.body;
    var name = obj.name
    if (name == "coco") {

      const privateKey = "abcd";

      var err = {};
      jwt.sign({ name: 'coco' }, privateKey, function (err, token) {

        err = {
          name: 'TokenExpiredError',
          message: JSON.stringify(token),
          expiredAt: 1408621000
        }


        res.send(err);
        res.end();
      });

    } else {
      res.sendStatus(403);
      res.end();
    }



});

app.post('/api/getPersonne', (req, res) => {
  //mock
  var dmd = req.body.dmd;
  var token = req.body.token;

  jwt.verify(token, 'abcd', function (err, decoded) {
    //console.log(decoded + "//" + this.tokenSave) // bar
    if (err) {
      res.status(403);
      res.end();
    } else {
      res.status(200);
      res.json({
        decoded
      });
      res.end();
    }

  });

});

*/


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
