const router = require('express').Router();
const { auth } = require('../jwt/jwt');
const { showDatos, showLogin, login, showSignup, signup } = require('../controllers/controlador');

router.get('/', auth, showDatos);
router.get('/login', showLogin);
router.post('/login', login);

router.get('/register', showSignup);
router.post('/register', signup);

router.get('/datos', auth, showDatos);


module.exports = router;