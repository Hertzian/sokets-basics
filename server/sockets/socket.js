const {io} = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado - Server');

    client.emit('enviarMensaje', {
        usuario: 'El verguis',
        mensaje: 'Nada de hacer mamadas que te estoy viendo'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado - Server');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);

        // if(data.usuario){
        //     callback({
        //         resp: 'Todo salio chido'
        //     });

        // }else{
        //     callback({
        //         resp: 'Valio verta'
        //     })
        // }


    });

});