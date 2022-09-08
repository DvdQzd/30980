const { generarToken } = require('../middleware/jwt');


const signin = (req, res) => {
    const { nombre } = req.body;
    const token = generarToken(nombre);
    res.status(200).json({"x-auth-token": token});
}

module.exports = {
    signin
}