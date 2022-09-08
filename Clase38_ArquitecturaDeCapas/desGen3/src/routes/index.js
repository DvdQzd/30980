const router = require('express').Router();
const { auth } = require('../middleware/jwt');
const { suma, resta, mult, div, lista} = require('../controllers/operaciones');
const { signin } = require('../controllers/usuarios');

router.get('/suma', suma);

router.get('/resta', resta);

router.get('/mult', mult);

router.get('/div', div);

router.get('/listar', auth, lista);

router.get("/signin", signin);

module.exports = router