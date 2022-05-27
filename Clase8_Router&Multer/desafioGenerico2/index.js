// Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el servidor, la cual tendrá un archivo index.html. 
// En ese archivo se encontrarán dos formularios: uno que permita ingresar mascotas y otro personas utilizando el método post
// Probar el ingreso de datos mediante los formularios y con Postman
// Verificar los datos cargados en cada caso.

const express = require('express');
const app = express();
const PORT = 8080;
const mascotas = require('./routes/mascotas');
const personas = require('./routes/personas');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/mascotas', mascotas);
app.use('/personas', personas);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});