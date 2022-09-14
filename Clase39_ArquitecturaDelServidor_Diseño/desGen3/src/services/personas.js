const { PrimeraConexion } = require('../class/singleton');

const obtenerHora = () => {
    return new PrimeraConexion().obtenerHora();
}

module.exports = {
    obtenerHora
}