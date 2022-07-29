const routes = require('express').Router();
const { checkAuthentication } = require('../middlewares/utilDeMidlewares');
const { get, insert } = require('../controllers/personas');

routes.get('/', checkAuthentication, get);
routes.post('/', checkAuthentication, insert);

module.exports = routes