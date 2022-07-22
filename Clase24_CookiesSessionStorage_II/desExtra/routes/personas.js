const routes = require('express').Router();
const { login } = require('../middlewares/auth');
const { get, insert, home, destroy } = require('../controllers/personas');

routes.get('/', login, get);

routes.post('/', login, insert);

routes.post('/home', home);

routes.post('/desloguear', destroy);


module.exports = routes