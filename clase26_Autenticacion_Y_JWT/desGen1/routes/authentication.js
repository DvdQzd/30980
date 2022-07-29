const routes = require('express').Router();
const passport = require('passport');
const { login, serveLogin, logout, serveSignup, signup, serveFailureLogin } = require('../controllers/authentication');

routes.get('/signup', serveSignup);
routes.get('/login', serveLogin);
routes.get('/twitter', passport.authenticate('loginTwitter'));
routes.get('/auth/twitter/callback', passport.authenticate('loginTwitter', {
    successRedirect: '/',
    failureRedirect: '/serveFailure'
}));

routes.post('/login', passport.authenticate('login', {failureRedirect: '/serveFailure'}), login);
routes.post('/signup', passport.authenticate('register'), signup);
routes.post('/destroy', logout);

routes.get('/serveFailure', serveFailureLogin);

module.exports = routes