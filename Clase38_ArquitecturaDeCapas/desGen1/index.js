// Dividir en capas el servidor del último desafío entregable (módulo de operaciones, proyecto con yarn), separando en capas de ruteo/controlador, lógica de negocio y capa de persistencia, utilizando exclusivamente funciones como vimos en el ejemplo de la clase.
// Además de ubicar en cada una de esas capas lo realizado hasta el momento, guardar en persistencia las operaciones realizadas en un array de objetos que contengan: tipo de operación, parámetros, resultado y timestamp.
// Permitir además el listado de dichas operaciones registradas.


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