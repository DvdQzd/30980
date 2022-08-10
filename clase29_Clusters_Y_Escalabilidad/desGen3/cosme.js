// Poner en marcha tres servidores (con el formato del primer ejercicio: sin cluster) utilizando Forever. Dichos procesos escucharán en los puertos 8081, 8082 y 8083 respectivamente.
// Generar un request a sus rutas raíz comprobando que respondan adecuadamente.
// Verificar en el sistema operativo la cantidad de procesos levantados de node y analizar el porqué.
// Finalizar por sistema operativo el proceso de cada uno de estos servidores, comprobando que Forever los ponga en marcha nuevamente (tendrían que iniciar con un nuevo pid).
// Listar todos los servidores activos y comprobar la finalización de un proceso y de todos por parte de Forever, comprobando en el sistema operativo los procesos de node levantados.


const express = require('express');
const app = express();
const PORT = process.argv[2] || 8081;

console.log("PID: ", process.pid);
app.get("/", (req, res) => {
    res.status(200).send(`Servidor express en: ${PORT} - PID: ${process.pid} - Date: ${new Date()} - COSMES.JS`);
})

app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
});