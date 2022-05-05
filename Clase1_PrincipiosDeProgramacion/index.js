console.clear();

// TIPO DE DATO PRIMITIVO:
//     INT - STRING - BOOLEAN - FLOAT - ETC - DATE

// TIPO DE DATO COMPLEJOS:
//     ARRAY - JSON

// let myArray = [ 2, 5, 6, "cosmes", "fulanito", true];
// console.log(myArray);

// let myJSON = { 
//     name: "cosmes",
//     apellido: "fulanito",
//     edad: 32,
//     soltero: true
// };

// const fecha = date();
// console.log(typeof(myArray));


// ---------------
// mutables  -----  no mutables
// let y var -----  const
// ----------------

// let nombre = "cosmes";
// var apellido = "fulanito";
// const programa = "simpson";

// console.log(nombre);
// console.log(apellido);
// console.log(programa);


// function nombres() {

//     let name = "cosmes";

//     if(true) {
//         let apellido = "fulanito";
//         var edad = 32;
        
//     }
    
//     let saludo = `Bienvenido a coderhouse ${name}, mi edad es: ${edad}`;
//     console.log(saludo);
// }


// nombres();

// -------------------------------------------------------------------------------------------------------------------

// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

let nombre = "pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    {
        nombre: 'El lobo de wall street',
        estreno: 2009,
        protagonistas: ["Leonardo Di Caprio", "Margot Robbie"]
    },
    {
        nombre: 'Duro de matar',
        estreno: 1988,
        protagonistas: ["Bruce Willis", "Señor Bruce Willis"]
    }
];

console.log(`Nombre de la variable: ${nombre}`);
console.log(`La edad de la variable es: ${edad}`);
console.log(`Precio: $${precio.toFixed(2)}`);
console.log(`Mis series favoritas son: ${seriesFavoritas}`);
console.log(`Mis peliculas favoritas son: ${peliculasFavoritas}`);

console.log(`mi nueva edad es: ${edad + 1}`);

edad = edad + 1;

edad += 1;
console.log(`mi nueva edad es: ${edad}`);

edad++                   // esta es la manera mas comun de sumar 1
console.log(`mi nueva edad es: ${edad}`);

++edad
console.log(`mi nueva edad es: ${edad}`);

const nuevasSeries = ["peaky blinders", "How I meet your mother"];
seriesFavoritas.push("Friends");
seriesFavoritas.push(nuevasSeries)

console.log(`Esta es mi lista actualizada de series favoritas: ${seriesFavoritas}`);


//  --------------------    EXTRAS!     -------
// spread operators!
// let myArray = [1, 2, 3];
// console.log(...myArray, 6);

// let myJSON = {
//     nombre: "cosmes", 
//     apellido: "fulanito"
// };
// console.log({...myJSON}, {edad: 32});


// let array1 = [3, 4, 5];
// let array2 = [6, 7, 8];
// let nuevoArray = [...array1, ...array2];
// console.log(nuevoArray);


// ejemplos de const que pueden ser modificados
// recuerden igual que esto es una mala practica, pero son detalles que suman saber para manejarse con JS
//
//
// function qwe() {
//     const objeto = {
//         nombre: "cosmes",
//         edad: 29
//     };
//     // Object.freeze(objeto)  --> con freeze aseguramos que quede inmutable
//     objeto.nombre = "fulanito";
//     objeto.edad = 32;

//     // objeto = {nombre: "fulanito", edad: 32}
//     console.log(objeto);
// }

// qwe();