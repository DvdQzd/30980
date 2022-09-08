let historialOperaciones = [];
const fs = require('fs').promises;


const insert = dato => {
    if(process.env.PERSISTENCE === "file") {
        insertarFS(dato);
    } else {
        historialOperaciones.push(dato);
    }
}

const listar = () => {
    if(process.env.PERSISTENCE === "file") {
        return listarFS();
    } else {
        return historialOperaciones
    }
}

const insertarFS = async dato => {
    const info = await fs.readFile('operaciones.txt');
    if( info.length > 0) {
        historialOperaciones = JSON.parse(info);
    }

    historialOperaciones.push(dato);
    await fs.writeFile('operaciones.txt', JSON.stringify(historialOperaciones, null, 2));
}

const listarFS = async () => {
    return JSON.parse(await fs.readFile('operaciones.txt'));
}


module.exports = {
    insert,
    listar
}