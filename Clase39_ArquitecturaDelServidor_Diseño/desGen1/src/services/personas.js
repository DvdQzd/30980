const {insertarPersona, leerPersonas} = require('../model/personas');


const agregarPersonas = persona => {
    insertarPersona(persona);
}

const obtenerPersonas = persona => {
    return leerPersonas();
}

module.exports = {
    agregarPersonas,
    obtenerPersonas
}