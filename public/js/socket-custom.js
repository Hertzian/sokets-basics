let socket = io();

// .on escucha info
socket.on('connect', function(){
    console.log('conectado al servidor - Cliente');
});

socket.on('disconnect', function(){
    console.log('Se perdio conexion con el server - Cliente');
});

// Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Lalo',
    mensaje: 'Hola wee'
}, function(response) {
    console.log('respuesta servre', response);
});

// Escuchar info
socket.on('enviarMensaje', function(response){
    console.log('Server', response);
})
