// Reformar el ejercicio anterior utilizado Faker para generar los objetos con datos aleatorios en español.
// A la ruta '/test' se le podrá pasar por query params la cantidad de objetos a generar.
// Ej: '/test?cant=30'. 
// De no pasarle ningún valor, producirá 10 objetos.
// Incorporarle id a cada uno de los objetos generados en forma incremental, empezando por 1.

const express = require('express');
const app = express();
const PORT = 8080;
const mockUsuarios = require('./facker/mockUsuarios');

app.get('/test', (req, res) => {

    let cant = req.query.cant || 10;
    let arr = [];
    for (let i = 0; i < cant; i++) {
        let usuario = mockUsuarios.get();
        usuario.id = i + 1;
        arr.push(usuario);
    };

    res.status(200).send(arr);
})

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`);
})