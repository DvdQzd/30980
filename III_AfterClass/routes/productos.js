const router = require('express').Router();
const { getAllProducts, addProducts, getById, updateProducts } = require('../controllers/productos');

router.get('/:id', getById);
router.get('/', getAllProducts);
router.put('/:id', updateProducts);
router.post('/', addProducts);

module.exports = router;