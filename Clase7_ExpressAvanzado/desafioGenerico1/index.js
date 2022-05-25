// CODIGOS DE RESPUESTA HTTP MAS COMUNES

// 200 - 201 - 203 - 206 -- respuesta OK con pequeñas diferencias
// 304 -- redireccion
// 400 - 401 - 403 - 404 -- hubo algun problema en la peticion
// 500 - 501  -- errores internos del servidor

// ABM  -- ALTA BAJA MODIFICACION
// CRUD  -- CREATE READ UPDATE DELETE

// Dada la siguiente constante: const frase = 'Hola mundo cómo están'
// Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
// 2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
// 3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
// Aclaraciones:
// - En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
// { error: "El parámetro no es un número" } cuando el parámetro no es numérico
// { error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.


const express = require('express');
const app = express();
const PORT = 8080;
const frase = 'Hola mundo cómo están';

app.get('/api/frase', (req , res) => {
    res.status(200).json({frase});
});

app.get('/api/frase/:num', (req, res) => {

    const num = parseInt(req.params.num) - 1;

    if(isNaN(num)) {
        return res.status(400).json({error: 'El parametro no es númerico'});
    }

    if(num < 0 || num > frase.length) {
        return res.status(400).json({error: 'El parametro está fuera del rango'});
    }

    res.status(200).send(frase[num]);
});

app.get('/api/palabra/:num', (req, res) => {
    const num = parseInt(req.params.num) - 1;
    const fraseArray = frase.split(' ');

    if(isNaN(num)){
        return res.status(400).json({error: 'El parametro no es númerico'});
    }

    if(num < 0 || num > fraseArray.length) {
        return res.status(400).json({error: 'El parametro está fuera del rango'});
    }

    res.status(200).send(fraseArray[num]);
})

app.get('*', (req, res) => {
    res.json({
        code: 404,
        mensaje: 'Page not found'
    })
});


app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
})