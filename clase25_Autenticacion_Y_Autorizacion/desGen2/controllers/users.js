const { get } = require('../models/users');


const getUserInfo = (req, res) => {
    const name = req.session.nombre;
    const user = get(name);
    res.status(200).json(user);
}

module.exports = {
    getUserInfo
}