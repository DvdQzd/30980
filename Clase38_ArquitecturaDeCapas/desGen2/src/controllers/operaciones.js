const {sumar, restar, multpilicar, dividir, listar} = require('../services/logica');

const suma = (req, res) => {
    let { num1, num2 } = req.query;
    const result = sumar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const resta = (req, res) => {
    let { num1, num2 } = req.query;
    const result = restar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const mult = (req, res) => {
    let { num1, num2 } = req.query;
    const result = multpilicar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};


const div = (req, res) => {
    let { num1, num2 } = req.query;
    const result = dividir(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const lista = async (req, res) => {
    const result = await listar();
    res.status(200).json(result);
};


module.exports = {
    suma,
    resta,
    mult,
    div,
    lista
}