const express = require('express');
const app = express();
const PORT = 8080;

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];


app.get('/test', (req, res) => {
    let arr = [];
    
    for (let i = 0; i < 10; i++) {
        arr.push({
            nombre: nombres[Math.round(Math.random() * (nombres.length - 1))],
            apellido: apellidos[Math.round(Math.random() * (apellidos.length - 1))],
            color: colores[Math.round(Math.random() * (colores.length - 1))],
        })      
    }

    res.status(200).send(arr);
});

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`);
})