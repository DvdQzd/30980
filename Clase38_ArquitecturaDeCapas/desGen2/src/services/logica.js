const persistencia = require('../persistence/persistencia');
const libreria = require('../utils/mathOperations');

const sumar = (num1, num2) => {
    let res = libreria.suma(num1, num2);
    persistencia.insert({
        tipo: 'suma',
        params: [num1, num2],
        resultado: res,
        timestamp: Date.now()
    });

    return res;
};

const restar = (num1, num2) => {
    let res = libreria.resta(num1, num2);
    persistencia.insert({
        tipo: 'resta',
        params: [num1, num2],
        resultado: res,
        timestamp: Date.now()
    });

    return res;
};

const multpilicar = (num1, num2) => {
    let res = libreria.multiplicacion(num1, num2);
    persistencia.insert({
        tipo: 'multiplicacion',
        params: [num1, num2],
        resultado: res,
        timestamp: Date.now()
    });

    return res;
};

const dividir = (num1, num2) => {
    let res = libreria.division(num1, num2);
    persistencia.insert({
        tipo: 'division',
        params: [num1, num2],
        resultado: res,
        timestamp: Date.now()
    });

    return res;
};

const listar = () => {
    return persistencia.listar();
}

module.exports = {
    sumar,
    restar,
    multpilicar,
    dividir,
    listar
}