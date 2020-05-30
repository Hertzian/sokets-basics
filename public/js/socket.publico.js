let socket = io();

let ticket1 = document.querySelector('#lblTicket1');
let ticket2 = document.querySelector('#lblTicket2');
let ticket3 = document.querySelector('#lblTicket3');
let ticket4 = document.querySelector('#lblTicket4');

let esc1 = document.querySelector('#lblEscritorio1');
let esc2 = document.querySelector('#lblEscritorio2');
let esc3 = document.querySelector('#lblEscritorio3');
let esc4 = document.querySelector('#lblEscritorio4');

let tickets = [
    ticket1,
    ticket2,
    ticket3,
    ticket4
]
let escritorios = [
    esc1,
    esc2,
    esc3,
    esc4
]

socket.on('connect', function(){
    console.log('Conectado al server - Cliente');
});

socket.on('disconnect', function(){
    console.log('Desconectado del server - Cliente');
});

socket.on('estadoActual', function(data){
    console.log(data);
    // reproducir audio
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

// socket.on('actualizarPublico', function(data){
//     console.log(data);
//     actualizaHTML(data.ultimos4);
// });

// on.ultimos4

function actualizaHTML(ultimos4){
    for(let i = 0; i <= ultimos4.length -1; i++){
        tickets[i].innerHTML = `Ticket ${ultimos4[i].numero}`
        escritorios[i].innerHTML = `Escritorio ${ultimos4[i].escritorio}`
    }
}