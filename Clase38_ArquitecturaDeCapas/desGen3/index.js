// Continuando el proyecto del desafío anterior, modificar nuestro sistema para que la operacion de ‘listar’ solo pueda ser realizada por usuarios autorizados. Para ello, agregar un mecanismo simple de registro, que provea una clave secreta, y que solo permita acceder al listado de operaciones a quienes adjunten a su peticion la clave en su cabecera.
// De ser posible, realizar estas modificaciones sin tener que tocar la capa de negocios ni la de persistencia.


const express = require("express");
const app = express();
const PORT = 8081;
const router = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => {
    console.log(`running`);
});