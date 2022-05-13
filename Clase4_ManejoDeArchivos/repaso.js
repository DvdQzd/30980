

// function escribirYLoguear(texto, cb) {
//     console.log(texto);
//     cb("archivo escrito");
// }

// escribirYLoguear(' hola mundo', (mensaje) => {
//     const fecha = new Date().toLocaleDateString();
//     console.log( ` ${fecha} : ${mensaje}`);
// });


// setTimeout( () => {
//     console.log("bella");
// },500);

// const PID = setInterval( () => {
//     console.log("ciao")
// },1000);

// setTimeout( () => {
//     clearInterval(PID);
//     console.log("Una mattina mi sono alzato...")
// }, 4000);

// const timer2 = () => {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             resolve(console.log("Hola Timer 2"));
//         }, 3000)
//     })
// }

// const timer3 = () => {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             resolve(console.log("Hola Timer 3"));
//         }, 4000)
//     })
// };

// async function muchosTimers() {
//     console.log("Inicio: ", (new Date()).getSeconds());
//     await timer2();
//     await timer3();
//     enviarNotificacion(); // este es un proceso asyncronico que no nos interesa frenar el hilo de ejecucion
//     console.log("Fin: ", (new Date()).getSeconds());
// }

// muchosTimers()


// Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
// Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
// Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se 
// intercalen.

// const fin = () => console.log("Hemos finalido de escribir el archivo");

// function mostrarLetras(palabra, intervalo, cb){
//     let i = 0;
//     const PID = setInterval( () => {
//         console.log(palabra[i]);
//         i++;
//         if( i === palabra.length){
//             clearInterval(PID);
//             cb();
//         }
//     }, intervalo);
// }

// mostrarLetras("¡Hola!", 0, fin);
// mostrarLetras("¡Hola!", 250, fin);
// mostrarLetras("¡Hola!", 500, fin);
// mostrarLetras("¡Hola!", 1000, fin);

// C:/WORKSPACE/PROGRAMA_EN_NODE/INDEX.JS --> path absoluto
// ./INDEX.JS --> path relativo, se toma en cuanta donde uno esta parado programando
// ../ --> sube una posicion desde donde estoy parado
// ../PROGRAMA_EN_NODE/INDEX.JS --> sube una posicion desde donde estoy parado y entra a la carpeta programa en node..