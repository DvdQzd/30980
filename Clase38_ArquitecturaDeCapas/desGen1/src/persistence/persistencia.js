let historialOperaciones = [];

const insert = dato => {
    historialOperaciones.push(dato);
}

const listar = () => {
    return historialOperaciones
}


module.exports = {
    insert,
    listar
}