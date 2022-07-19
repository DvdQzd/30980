const router = require('express').Router();
const { getAllProducts, addProducts, getProductById, updateProducts, deleteProductById } = require('../controllers/productos');

router.get('/:id', getProductById);
router.get('/', getAllProducts);
router.put('/:id', updateProducts);
router.post('/', addProducts);
router.delete('/:id', deleteProductById);

module.exports = router;