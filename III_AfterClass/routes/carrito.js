const router = require('express').Router();
const { addCarrito } = require('../controllers/carrito');

router.post('/:id/productos', addCarrito);

module.exports = router;