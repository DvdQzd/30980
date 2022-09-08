// Continuando el proyecto del desafío anterior, modificar nuestro sistema para que la persistencia, en lugar de realizarse en memoria, se realice en el disco, en un archivo.
// Luego, modificar nuevamente el sistema para que la persistencia se realice utilizando una base de datos (a elección del desarrollador).
// De ser posible, realizar ambas modificaciones sin tener que tocar la capa de negocios.



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