// Realizar un servidor que calcule 10000 números aleatorios entre el 0 y el 9 inclusive.
// El servidor devolverá los números calculados en un array dentro de un objeto en formato JSON: {randoms: [array de randoms]}.
// Se van a utilizar dos rutas en las que el cliente puede requerir la información: '/randoms-nodebug' y '/randoms-debug', la última contendrá un console.log que enviará el array calculado a la consola del servidor.
// agregar un parámetro (FORK ó CLUSTER) en línea de comandos que permita habilitar o deshabilitar el modo cluster en el servidor.

// ejemplo CURL
// curl --location --request GET 'localhost:8085/randoms-nodebug' \

const express = require('express');
const app = express();
const PORT = 8085;

function numerosRandom(min, max, cant) {
    let randoms = [];
    for (let i = 0; i < cant; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        randoms.push(random);
    }
    return randoms;
}

app.get('/randoms-nodebug', (req, res) => {
    let randoms = numerosRandom(0,9,100000);
    res.send(randoms);
});

app.get('/randoms-debug', (req, res) => {
    let randoms = numerosRandom(0,9,100000);
    console.log(randoms);
    res.send(randoms);
});

app.listen( PORT, () => {
    console.log(`Running on port: ${PORT}`);
})