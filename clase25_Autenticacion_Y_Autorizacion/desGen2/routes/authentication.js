const routes = require('express').Router();
const { login } = require('../middlewares/auth');
const { home, destroy, serveSignup, signup } = require('../controllers/authentication');

routes.post('/home', login, home);
routes.post('/desloguear', destroy);
routes.get('/signup', serveSignup);
routes.post('/signup', signup);

module.exports = routes