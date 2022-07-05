const indexRouter = require('express').Router();
const productos = require('./productos');
const carrito = require('./carrito');
const chat = require('./chat');


indexRouter.use('/chat', chat);
indexRouter.use('/api/carrito', carrito);
indexRouter.use('/api/productos', productos);

module.exports = indexRouter