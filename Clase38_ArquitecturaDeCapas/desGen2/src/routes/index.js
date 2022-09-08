const router = require('express').Router();
const { suma, resta, mult, div, lista} = require('../controllers/operaciones');

router.get('/suma', suma);

router.get('/resta', resta);

router.get('/mult', mult);

router.get('/div', div);

router.get('/listar', lista);

module.exports = router