// Instalar el gestor de paquetes yarn con npm en forma global.
// Verificar la versión instalada de yarn.
// Crear un proyecto de node.js utilizando yarn.
// Instalar express con yarn.
// Crear un servidor express que devuelva en su ruta raíz el mensaje: "Hola Yarn".
// Crear un script start que ejecute nodemon con el punto de entrada del servidor.
// Ejecutar el script start con yarn (pista: funciona igual que con npm).

const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
    res.status(200).send("hola yarn");
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});