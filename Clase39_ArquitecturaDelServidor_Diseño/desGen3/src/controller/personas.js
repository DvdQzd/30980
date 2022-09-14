const { obtenerHora } = require('../services/personas.js');

const getHora = async (req, res) => {
    res.json({fyh: obtenerHora()})
}

module.exports = {
    getHora
}