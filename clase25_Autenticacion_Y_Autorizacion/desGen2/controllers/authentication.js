const { add } = require("../models/users");

const home = (req, res) => {
    const {name} = req.body;
    req.session.nombre = name;
    res.redirect('/');
}

const destroy = (req, res) => {
    try {
        console.log("Paso");
        console.log(req.session)
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Err: ", err);
    }
}

const serveSignup = (req, res) => {
    res.render('pages/indexSignup.ejs');
}

const signup = (req, res) => {
    const {name, password} = req.body;
    try {
        if(name && password){
            add(name, password);
            req.session.nombre = name;
            res.redirect('/');
        } else {
            res.render('pages/indexLogin');
        }
    } catch (e) {
        res.render('pages/indexLogin', {message: "Usuario existente!"});
    }
}

module.exports = {
    home,
    destroy,
    serveSignup,
    signup
}