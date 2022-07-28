const { add } = require("../models/users");

const login = (req, res) => {
    res.redirect('/');
}

const serveLogin = (req, res) => {
    res.render('pages/indexLogin');
}

const logout = (req, res) => {
    req.session.destroy( err => {
        if(err) return res.status(400).send({"error": err});
        res.redirect('/')
    })
}

const serveSignup = (req, res) => {
    res.render('pages/indexSignup.ejs');
}

const signup = (req, res) => {
    res.redirect('/');
}

const serveFailureLogin = (req, res) => {
    res.render('pages/failureLogin');
}

module.exports = {
    login,
    serveLogin,
    logout,
    serveSignup,
    signup,
    serveFailureLogin
}