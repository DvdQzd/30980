const express = require("express");
const router = express.Router();
const { generar, get, post, put, del } = require("../api/usuarios");

const notFound = (req, res) => {
    let {url} = req;
    let {method} = req;
    res.send(`Ruta <span style="color: blue;">${method}</span> <i style="color: red;"> ${url} not allowed`);
}

router.get('/generar/:cant', generar);
router.get('/:id?', get);
router.post('/', post);
router.put('/:id', put);
router.delete('/:id', del);
router.get('*', notFound);
router.post('*', notFound);
router.put('*', notFound);
router.delete('*', notFound);


module.exports = {
    router
}