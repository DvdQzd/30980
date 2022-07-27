const { add, get} = require('../models/users');

const login = (req, res, next) => {

    if(req.session?.nombre) {
        next();
    } else {

        const {name, password} = req.body;
        const user = get(name);
        console.log("user: ", user);
        if( user && user.name === name && user.password === password) {
            req.session.nombre = name;
            next();
        } else {
            res.render('pages/indexLogin.ejs', {message: "not authorized"});
        }
    }
}

module.exports = {
    login
}