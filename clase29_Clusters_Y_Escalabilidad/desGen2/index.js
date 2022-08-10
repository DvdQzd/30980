// Tomando como base el ejercicio anterior, agregar la lógica que permita construir un cluster de servidores, poniendo un evento de escucha en cada servidor para reiniciarlo si se cae.
// Representar por consola el número de procesadores detectados, el momento en el que un servidor se cae, el pid de los procesos worker y el del master. 
// Poner en marcha el servidor con node y nodemon en el puerto 8081, verificando en cada caso, la respuesta en su ruta raíz y el número de procesos activos de node en el sistema operativo, relacionándolos con el número de procesadores.
// Finalizar en el sistema operativo un proceso worker comprobando que se reinicia en un nuevo pid.
// Como último identificar el pid del master y finalizar su proceso de node, analizando qué ocurre en el caso de haberlo ejecutado con node y con nodemon.



const express = require('express');
const app = express();
const PORT = process.argv[2] || 8080;
const numCpus = require('os').cpus().length;
const cluster = require("cluster");
let contadorVisitas = 0;


if(cluster.isMaster) {

    console.log("numCpus: ", numCpus);
    
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log(`Worker: ${worker.process.id} died`);
        cluster.fork();
    });
} else {

    app.get("/", (req, res) => {
        res.status(200).send(`Servidor express en: ${PORT} - PID: ${process.pid} - Date: ${new Date()} - Vistas: ${contadorVisitas++}`);
    });

    app.listen(PORT, () => {
        console.log(`Running on PORT: ${PORT} - ProcessId: ${process.pid}`);
    });
}
