const { add, get} = require('../models/users');

passport.use('login', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

// const login = (req, res, next) => {

//     if(req.session?.nombre) {
//         next();
//     } else {

//         const {name, password} = req.body;
//         const user = get(name);
//         console.log("user: ", user);
//         if( user && user.name === name && user.password === password) {
//             req.session.nombre = name;
//             next();
//         } else {
//             res.render('pages/indexLogin.ejs', {message: "not authorized"});
//         }
//     }
// }

// module.exports = {
//     login
// }