const {insertarPersona, leerPersonas} = require('../model/personas');


const agregarPersonas = persona => {
    insertarPersona(persona);
}

const obtenerPersonas = () => {
    return leerPersonas();
}

module.exports = {
    agregarPersonas,
    obtenerPersonas
}