// Crear un servidor que tenga una ruta '/' que reciba por query params o ody dos números y devuelva un mensajes con la suma entre ambos.
// Utilizar log4js para crear un módulo capaz de exportar uno de los siguientes dos loggers: uno para el entorno de desarrollo, que logueará de info en adelante por consola, y otro para el entorno de producción, que logueará de debug en adelante a un archivo ‘debug.log’ y solo errores a otro archivo ‘errores.log’.
// La decisión de qué logger exportar se tomará en base al valor de una variable de entorno NODE_ENV, cuyo valor puede ser: ‘PROD’ para producción, o cualquier otra cosa (incluyendo nada) para desarrollo.
// process.env.NODE_ENV = "PROD";
const express = require('express');
const app = express();
const PORT = 8085;
const { log } = require('./logger');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/suma', (req, res) => {
    log.trace('controller - /suma');
    try {
        const num1 = parseInt(req.body.num1);
        const num2 = parseInt(req.body.num2);
        const resultado = num1 + num2;

        if( resultado > 100) {
            throw Error("El resultado debe ser menor a 100");
        } else {
            res.status(200).send(`Resultado: ${resultado}`);
            log.info(`Resultado de la suma: ${resultado}`);
            log.warn("un texto en Warning");
        }
    } catch (error) {
        log.error(`Error en la suma, error: ${error}`);
        res.status(500).send("error");
    }
})


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});