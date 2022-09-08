const router = require('express').Router();
const { sumar, restar, mult, div, listar} = require('../controllers/operaciones');

router.get('/suma', sumar);

router.get('/resta', restar);

router.get('/mult', mult);

router.get('/div', div);

router.get('/listar', listar);

module.exports = router