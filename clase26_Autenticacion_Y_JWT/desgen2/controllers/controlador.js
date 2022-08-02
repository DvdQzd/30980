const {generarToken, auth} = require('../jwt/jwt');

let usuarios = [];

const showLogin = (req, res) => {
    res.redirect('/login.html');
};

const showSignup = (req, res) => {
    res.redirect('/register.html');
}

const login = (req, res) => {
    let { nombre, password } = req.body;
    const user = usuarios.find( el => el.nombre === nombre);
    if(user && user.password === password) {
        user.contador = 0;
        const token = generarToken(nombre);
        res.header('x-auth-token', token).send("OK");
    }
};

const signup = (req, res) => {
    let user = usuarios.find( el => el.nombre === req.body.nombre);
    if(user) {
        res.status(400).send("error, el usuario ya existe!");
    } else {
        user = req.body;
        if( user.contador ) {
            user.contador = 0;
        }
        usuarios.push(user);
        const token = generarToken(user.nombre);
        res.header('x-auth-token', token).send(user);
    }
};

const showDatos = (req, res) => {
    const user = usuarios.find( el => el.nombre === req.user.nombre);
    if( user ){
        user.contador++;
        console.log(user)
        res.render( 'datos', {
            datos: user,
            contador: user.contador
        });
    } else {
        res.render('token-error');
    }
};

module.exports = {
    showLogin,
    showSignup,
    showDatos,
    login,
    signup
};