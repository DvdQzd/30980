console.clear();

// function nombreDeLaFuncion(arg1, arg2) {
//     if(true){
//         console.log("entro en un if");
//     }
// }
// const enUnaVariable = (argumento1) => {
//     if(true){
//         console.log("entro en un if dentro de una arrow function", argumento1);
//     }
// }

// const mostrarAlgo = algo => console.log(algo); // NO SON NECESARIAS LAS LLAVES SI ES UNA SOLA INSTRUCCION, IGUAL QUE NO SON NECESARIOS LOS PARENTES DE LOS ARGUMENTOS SI ES UNO SOLO

// const suma = (num1, num2) => num1 + num2;  // EL RETURN ESTA IMPLICITO, SOLO ES VALIDO CUANDO HAY UNA SOLA INSTRUCCION
// const returnJSON = (nombre, apellido) => ({ nombre, apellido }); // EL RETURN ESTA IMPLICITO EN LOS PARENTESIS, ES VALIDO CUANDO HAY SOLO UNA INSTRUCCION

// nombreDeLaFuncion();
// enUnaVariable("argumentos");

// mostrarAlgo("hola mundo");

// console.log(suma(1,2));
// console.log(returnJSON("Cosme", "Fulanito"));

// callback, definicion
// const functionCallback = () => {}
// function nombreDeFuncion( string, int, tipodedatocualquiera, functionCallback);

// const miArray = [2, 3, 4, 5];
// const nuevoArray = miArray.map( elemento => elemento * 2);
// console.log(nuevoArray);

// // a tener en cuenta, que callback es el nombre de la funcion que va a recibir
// const escribirFecha = (mensaje) => {
//     const fecha = new Date().toLocaleString();
//     console.log(`${fecha} : ${mensaje}`)
// }

// function escribirYLoguear(texto, escribirFechaCallback){
//     console.log(texto);
//     escribirFechaCallback("cosme Fulanito");
// }

// escribirYLoguear("hola ", escribirFecha);

// function dividir( dividendo, divisor) {
//     return new Promise( (resolve, reject) => {
//         if(divisor === 0) {
//             reject("No se puede dividir por cero");
//         }

//         resolve(dividendo/divisor);
//     })
// };

// dividir(5, 0)
//     .then( respuesta => console.log(respuesta))
//     .catch( error => console.log(error));

// dividir(5, 1)
//     .then( respuesta => console.log(respuesta))
//     .catch( error => console.log(error));

// ( async () => {
//     try {
//         console.log(await dividir(5,1));
//         console.log(await dividir(5,0));
//     } catch (e) {
//         console.log(e);
//     }
// })();

// Promise.resolve(20)
//     .then( x => x + 1)
//     .then( x => x * 2)
//     .then( x => {
//         if (x == 22) {
//             throw 'Error';
//         } else {
//             return 80;
//         }
//     })
//     .then( x => 30)
//     .then( x => x / 2)
//     .then( console.log)
//     .catch( console.log);

// Promise.resolve(10)
//     .then( x => x + 1)
//     .then( x => x * 2)
//     .then( x => {
//         if (x == 22) {
//             throw 'Error';
//         } else {
//             return 80;
//         }
//     })
//     .then( x => 30)
//     .then( x => x / 2)
//     .then( console.log)
//     .catch( console.log);

// Promise.reject(30)
//     .then( x => x + 1)
//     .then( x => x * 2)
//     .then( x => {
//         if (x == 22) {
//             throw 'Error';
//         } else {
//             return 80;
//         }
//     })
//     .then( x => 30)
//     .then( x => x / 2)
//     .then( console.log)
//     .catch( console.log)


// ( async () => {
//     console.log("hola");
//     console.log(await dividir(5,1));
//     console.log("chau")
// })();


// SETTIMEOUT, SETINTERVAL, CLEARINTERVAL

// setTimeout(() => { 
//     console.log("Bella");
// }, 500);

// const pid = setInterval( () => {
//     console.log("Ciao");
// }, 1000);

// setTimeout( () => {
//     clearInterval(pid);   // elimino el setInterval que cree arriba
//     console.log("una mattina mi sono alzato....");
// }, 4000);
// setInterval(funcion, Int);


const timer1 = () => {
    setTimeout( () => {
        console.log("hola Timer 1");
    }, 2000);
};

const timer2 = () => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve(console.log("hola timer con promise 1"))
        }, 2000)
    })
};

const timer3 = () => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve(console.log("Hola timer con promise 2"));
        }, 4000)
    })
}

// ( async () => {
//     timer1();
//     await timer2();
//     console.log("chau");
// })();

async function muchosTimers() {
    console.log("Inicio: ", (new Date().getSeconds()));
    await timer2();
    await timer3();
    console.log("Fin: ", (new Date().getSeconds()));
}

muchosTimers();

async function muchosTimersAll() {
    try {
        console.log("Inicio ALL: ", (new Date().getSeconds()));
        const [resultado1, resultado2] = await Promise.all([timer2(), timer3()]);
        console.log("Fin ALL: ", (new Date().getSeconds()));    
    } catch (e) {
        console.log(e);
    }
    
}

muchosTimersAll();