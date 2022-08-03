const routes = require('express').Router();
const { getUserInfo } = require('../controllers/users');


routes.get('/datos', getUserInfo);


module.exports = routes