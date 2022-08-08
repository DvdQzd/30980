// --- AMBOS PROCESOS CARGAN TODO EN MEMORIA Y AL TERMINAR DEVUELVEN EL RESULTADO
// EXEC() --> EJECUTA UN COMANDO
// EXECFILE() --> EJECUTA UN ARCHIVO

// -- AMBOS PROCESOS TRABAJAN COMO UN EVENTO, POR ENDE HAY QUE ESCUCHARLOS
// SPAWN() --> EJECUTA UN COMANDO
// FORK() --> EJECUTA UN ARCHIVO


// Realizar un servidor en express que contenga una ruta raíz '/' donde se represente la cantidad de visitas totales a este endpoint (no usar session).
// Se implementará otra ruta '/calculo-bloq', que permita realizar una suma incremental de los números del 0 al 100000 con el siguiente algoritmo.

// Comprobar que al alcanzar esta ruta en una pestaña del navegador, el proceso queda en espera del resultado. Constatar que durante dicha espera, la ruta de visitas no responde hasta terminar este proceso.
// Luego crear la ruta '/calculo-nobloq' que hará dicho cálculo forkeando el algoritmo en un child_process, comprobando ahora que el request a esta ruta no bloquee la ruta de visitas. Asegurarse de que una vez finalizado el proceso, el worker se cierra correctamente.

const app = require('express')();
const { fork } = require('child_process');
let contadorVisitas = 0;

const sumar = () => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;      
    }
    return suma;
}

app.get('/', (req, res) => {
    contadorVisitas++;
    res.status(200).send(
        `<h1> Visitas: ${contadorVisitas.toString()}</h1>`
    );
});

app.get("/bloq", (req, res) => {
    res.status(200).send(`La suma es: ${sumar().toString()}`);
});

app.get("/no_bloq", (req, res) => {
    const calculo = fork('./contador.js');
    calculo.send('start');
    calculo.on('finish', resultadoOperacion => {
        res.status(200).send(`<h1>La suma es: ${resultadoOperacion}</h1>`);
    })
});

app.listen(8000, () => {
    console.log("Runing on port: 8000");
})