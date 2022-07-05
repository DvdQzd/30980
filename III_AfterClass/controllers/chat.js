const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);

let chat = [];
let users = [];

const chatController = (req, res) => {
    io.on('connection', channel => {
        
        emitir();
        sendUsers();
    
        channel.on('incomingMessage', message => {
            users.indexOf(message.nombre) === -1 ? null : channel.emit("changeName");
            chat.push(message);
            users.push(message.nombre);
            emitir();
            sendUsers();
        });
    });
    
    res.sendFile(__dirname + '../../../chat.html');
};

const emitir = () => io.sockets.emit('chat', chat);
const sendUsers = () => io.sockets.emit('usersList', users);

module.exports = {
    chatController
}

