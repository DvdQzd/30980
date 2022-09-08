const logica = require('../services/logica');

const sumar = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.sumar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const restar = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.restar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const mult = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.multpilicar(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};


const div = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.dividir(num1, num2);
    res.status(200).send(`<h1>La suma de ${num1} y ${num2} es de: ${result}</h1>`);
};

const listar = (req, res) => {
    const result = logica.listar();
    res.status(200).json(result);
};


module.exports = {
    sumar,
    restar,
    mult,
    div,
    listar
}