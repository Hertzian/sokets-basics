// comando para establecer conexion
let socket = io();
let label = document.querySelector('#lblNuevoTicket');
let button = document.querySelector('button');
// let label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al server - Cliente');
});

socket.on('disconnect', function(){
    console.log('Desconectado del server - Cliente');
});

// on 'estadoActal'
socket.on('estadoActual', function(response){
    console.log(response);
    label.innerHTML = response.actual;
});

// listener para boton
// jquery
// $('button').on('click', function() {
//     console.log('Generar nuevo ticket');
//     console.log(label.text = 'hola');

//     socket.emit('siguienteTicket',null, function(siguienteTicket){

//         label.innerHTML = siguienteTicket;
//     });
// });

// vainilla JS
button.addEventListener('click', function() {
    console.log('Generar nuevo ticket');
    console.log(label.text = 'hola');
    
    socket.emit('siguienteTicket',null, function(siguienteTicket){
        label.innerHTML = siguienteTicket;
    });
});