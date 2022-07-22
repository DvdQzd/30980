
const login = (req, res, next) => {
    if(req.session?.nombre) {
        next();
    } else {
        res.render('pages/indexLogin.ejs', {message: "not authorized"});
    }
}

module.exports = {
    login
}