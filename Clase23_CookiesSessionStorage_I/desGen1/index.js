// Realizar un programa de backend que permita gestionar cookies desde el frontend. Para ello: 
// Definir una ruta “cookies”.
// Definir un método GET '/create' que reciba un objeto con el nombre de la cookie, su valor y el tiempo de duración en segundos, y que genere y guarde dicha cookie. Pasar los datos por PARAMS
// Definir un método GET '/get' que devuelva todas las cookies presentes.
// Definir un método GET ''/delete' que reciba el nombre de una cookie por parámetro de ruta, y la elimine.
// NOTA 1: Utilizar la librería express como estructura de servidor.
// NOTA 2: Si algún parámetro recibido es inválido, o directamente inexistente, el servidor devolverá un objeto de error.
// Ej: { error: 'falta nombre ó valor' } o { error: 'nombre no encontrado' }. Si todo sale bien, devolver el objeto { proceso: 'ok'}.
// NOTA 3: Si el tiempo no está presente, generar una cookie sin tiempo de expiración.
// NOTA 4:  Generar los request con varios navegadores (Chrome, edge, Firefox) para simular los distintos clientes en forma local.


const express = require('express');
const cookieParser = require('cookie-parser');
const { router } = require('./routes/cookiesRouter');
const app = express();
const PORT = 8081;

app.use(cookieParser());
app.use('/cookies', router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)    
});

// http://localhost:8080/cookies/create?nombre=Cosme&valor=Fulanito
// http://localhost:8080/cookies/get?nombre=Cosme
// http://localhost:8080/cookies/delete