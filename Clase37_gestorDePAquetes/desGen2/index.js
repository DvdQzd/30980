// Realizar un proyecto que subiremos a npm como dependencia propia.
// Este paquete debe exportar cuatro funciones para realizar estas operaciones básicas entre dos números: suma, resta, multiplicación y división. Subir el proyecto a npm.
// Verificar que la dependencia se encuentre en npm (https://www.npmjs.com/package/nombre-del-paquete)
// Abrir el proyecto servidor del desafio anterior e instalar con npm la dependencia recién creada.
// Importar la dependencia en este proyecto y realizar un endpoint get por cada operación ingresando los valores por query params. Probar el correcto funcionamiento de esas rutas.

const express = require('express');
const app = express();
const intMath = require('desgen2');
const PORT = 8081;


app.get('/', (req, res) => {
    res.status(200).send("Testeando la mejor libreria del mundo!");
    intMath.mostrar("mensaje");
});

app.get('/suma', (req, res) => {

    let {num1, num2} = req.query;
    const resultado = intMath.suma(num1, num2);
    res.status(200).send(`Resultado de la suma: ${resultado}`);
});

app.get('/resta', (req, res) => {

    let {num1, num2} = req.query;
    const resultado = intMath.resta(num1, num2);
    res.status(200).send(`Resultado de la resta: ${resultado}`);
});

app.get('/multiplicar', (req, res) => {

    let {num1, num2} = req.query;
    const resultado = intMath.multiplicacion(num1, num2);
    res.status(200).send(`Resultado de la multiplicacion: ${resultado}`);
});

app.get('/dividir', (req, res) => {

    let {num1, num2} = req.query;
    const resultado = intMath.division(num1, num2);
    res.status(200).send(`Resultado de la division: ${resultado}`);
});

app.listen(PORT, () => {
    console.log(`Running`);
})