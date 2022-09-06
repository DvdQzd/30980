const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8081;

// 1) Definir PORT con process.env.PORT para que heroku decida en que puerto inicia el servicio
// 2) Definir el script start: "node <archivo.js>" en el Package.json porque heroku usa ese script
// usar el archivo .gitignore

// para ver un monitoreo de los logs de el servidor en heroku correr este comando:
// heroku logs --tail

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/info", (req, res) => {
    res.status(200).send(`Puerto escuchado en: ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});