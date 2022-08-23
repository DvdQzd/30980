// Realizar un servidor con dos endpoints GET, cada uno que devuelva la frase 'Hola que tal' concatenada 1000 veces, en las rutas '/saludo' y '/saludozip'.
// Al manejador de '/saludozip' agregar gzip como middleware.
// Probar ambos endpoints y verificar en el navegador cuántos bytes llegan como respuesta desde el servidor y qué headers trae la respuesta.
// Sabiendo que  1000 veces 12 caracteres de 1 byte c/u equivale a 12000 bytes (~12kb) ese es tamaño de paquete que esperamos recibir. Chequear si es así en cada caso.


const express = require('express');
const app = express();
const PORT = 8085;
const compression = require('compression');

const frase = "hola que tal";

app.use(compression());

const concatenar = () => frase.repeat(10000);


app.get('/saludo', (req, res) => {
    res.status(200).send(concatenar());
});

app.get('/saludoZIP', (req, res) => {
    res.status(200).send(concatenar());
});



app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});