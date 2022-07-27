const routes = require('express').Router();
const { login } = require('../middlewares/auth');
const { getUserInfo } = require('../controllers/users');


routes.get('/datos', login, getUserInfo);


module.exports = routes