let socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor')
});

socket.on('disconnect', function(){
    console.log('Desconectado al servidor')
});

// obtener parametros por url
let searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
console.log(escritorio);

// jquery
// let label = $('small');

// $('h1').text(`Escritorio ${escritorio}`);

// // llamar socket
// $('button').on('click', function() {
//     socket.emit('atenderTicket', {escritorio: escritorio}, function(response){
//         small.innerHTML = response.numero;
//         console.log(response);
//         console.log(small)
//     })
// })


let small = document.querySelector('small');
let h1 = document.querySelector('h1');
let button = document.querySelector('button');

h1.innerHTML = `Escritorio ${escritorio}`;

button.addEventListener('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(response){
        if(response === 'No hay tickets'){
            small.innerHTML = response
            alert(response);
            return;
        }
        small.innerHTML = 'Ticket ' + response.numero;
        console.log(response);
        // console.log(small);
    })
})