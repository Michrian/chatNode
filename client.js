$(document).ready(function(){

    var socket = io('http://localhost:8000');


    function drag(event)
    {
      alert(event.dataTransfer.setData("text",event.target.id));
    }
       

    $('#div').mousemove(function(event){ 
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 

         $("#personne").css({"margin-left": event.pageX,"margin-top": event.pageY });

        socket.emit('position', {
            pageX : event.pageX,
            pageY : event.pageY
        });


        socket.on ('marche', function(msg){
                
        $('#message').append('<p>'+msg+'</p>');
        });
        

      });

    


 $('#loginForm').submit(function(event){

   event.preventDefault();


  

    socket.emit('chat', {
        nom : $('#nom').val(),
        text : $('#text').val()
    });
    
    socket.on('retour', function(user){

        $('#message').append('<p>'+user.nom+'</p>');
       
    })

 });









  });