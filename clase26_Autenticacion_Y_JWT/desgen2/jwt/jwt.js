const jwt = require('jsonwebtoken');

const generarToken = (nombre) => {
    return jwt.sign({nombre: nombre}, "palabraUltraSecreta", {expiresIn: '1h'});
};

const auth = (req, res, next) => {

    const token = req.headers['x-access-token'] || req.headers['authorization'];

    console.log(token);

    if(!token ){
        return res.redirect('/login.html');
    } else {
        try {
            const decoded = jwt.verify(token, "palabraUltraSecreta");
            console.log(decoded);
            req.user = decoded;
            next();
        } catch (e) {
            console.log("Error: ", e);
            return res.render('token-error');
        }
    }
}

module.exports = {
    generarToken,
    auth
};