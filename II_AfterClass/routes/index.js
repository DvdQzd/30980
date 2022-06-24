const indexRouter = require('express').Router();
const productos = require('./productos');


indexRouter.use('/api/productos', productos);

module.exports = indexRouter