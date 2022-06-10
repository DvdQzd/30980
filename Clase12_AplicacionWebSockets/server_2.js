const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('./public'));

let chat = [];
let users = {};
let colors = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', channel => {
    emitir();
    sendUsers();

    channel.on("incomingMessage", message => {
        // chatRoom();
        users[channel.id] ?
            users[channel.id] === message.nombre ? chatRoom(message, channel.id) : channel.emit("changeName")
            :
            Object.values(users).indexOf(message.nombre) === -1 ? addUser(message, channel.id) : channel.emit("changeName");

    });
});

const emitir = () => io.sockets.emit("chat", chat);
// const sendUsers = () => io.sockets.emit("usersList", users);
const sendUsers = () => io.sockets.emit("usersList", {users, colors});


function chatRoom(message, id) {
    const color = colors[id];
    message?.text ? chat.push({...message, color}) : null;
    sendUsers();
    emitir();
}

function addUser(message, id) {
    users[id] = message.nombre;
    colors[id] = Math.floor(Math.random()*16777215).toString(16);;
    chatRoom(message, id);
}

server.listen(3000, () => { console.log(`Running on port: ${3000}`)});


// if(users[channel.id]) {
//     if(users[channel.id] === message.nombre) {
//         chatRoom(message, channel.id);
//     } else {
//         channel.emit("changeName")
//     }
// } else {
//     if (Object.values(users).indexOf(message.nombre) === -1) {
//         users[channel.id] = message.nombre;
//         chatRoom(message, channel.id)
//         console.log("siga todo pelota");
//      } else {
//         channel.emit("changeName");
//     }
// }
