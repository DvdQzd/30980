const express = require('express');
const app = express();
const routes = require('./routes/index');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const { connectSQL, connectMong } = require('./models/databaseConnection');
const { chat } = require('./models/modelo');
const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(routes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = [];

io.on('connection', channel => {
    
    emitir();
    sendUsers();

    channel.on('incomingMessage', async message => {
        users.indexOf(message.nombre) === -1 ? null : channel.emit("changeName");
        await chat.create(message);
        users.push(message.nombre);
        emitir();
        sendUsers();
    });
});

const emitir = async () => {
    const readChat = await chat.findAll({raw: true});
    io.sockets.emit('chat', readChat)
};
const sendUsers = () => io.sockets.emit('usersList', users);

server.listen(process.env.PORT || PORT, async () => {
    await connectSQL();
    await connectMong();
    console.log(`Server running on PORT: ${PORT}`);
});