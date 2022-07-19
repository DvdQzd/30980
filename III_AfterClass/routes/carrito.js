const router = require('express').Router();
const { getCarritoById, createCarrito, addProductoToCarrito, deleteProductFromCarrito, deleteCarrito } = require('../controllers/carrito');

router.get('/:id', getCarritoById);
router.post('/', createCarrito);
router.post('/:id/productos/:id_prod', addProductoToCarrito);
router.delete('/:id/productos/:id_prod', deleteProductFromCarrito);
router.delete('/:id', deleteCarrito);


module.exports = router;