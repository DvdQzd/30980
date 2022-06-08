const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const PORT = 8080;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let mensajes = [];

io.on('connection', channel => {

    channel.on("caracter", argumento => {
        io.sockets.emit('respuestas', argumento);
    });
    
    channel.on("frases", frase => {
        mensajes.push({socketId: channel.id, mensaje: frase});
        io.sockets.emit('mensajeria', mensajes);
    })
    
    io.sockets.emit('mensajeria', mensajes);
});

httpServer.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});