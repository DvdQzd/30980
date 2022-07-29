const { add, get} = require('../models/users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const { config } = require('../config/config');

//-----------------
//
//    RECORDAR QUE POR DEFECTO PASSPORT TOMA USERNAME COMO DATO,
//    SI LO CAMBIAMOS (POR NOMBRE, MAIL U OTRA COSA) HAY QUE AGREGAR
//    EN EL MIDDLEWARE EL DATO usernameField: 'nombre'
//
//-------------------

passport.use('login', new LocalStrategy({
      passReqToCallback: true,
    }, function(req, username, password, next) {
      
      let user = get(username);

      if( user && user.username === username && user.password === password){
        return next(null, user);
      } else {
        return next(null, false);
      }
    })
);

passport.use('register', new LocalStrategy({
    passReqToCallback: true,
  }, function(req, username, password, next) {
    let usuario = get(username);
    if(usuario) return(null, false);

    const { address } = req.body;
    let user = add(username, password, address);
    return next(null, user);
}));

passport.use('loginTwitter', new TwitterStrategy({
  consumerKey: config.twitter.APIKEY,
  consumerSecret: config.twitter.APISECRET,
  callbackURL: "http://localhost:8000/auth/twitter/callback"
}, function(token, tokenSecret, profile, next) {
  console.log(profile);
  const user = add(profile.username, profile.id, profile.provider);
  return next(null, user);
}));


passport.serializeUser(function(user, next) {
  console.log(user);
  next(null, user.username);
});

passport.deserializeUser(function(username, next) {
  console.log(username);
  let usuario = get(username);
  next(null, usuario);
})