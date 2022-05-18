// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// Math.floor(Math.random() * (max - min + 1) + min)

function ejercicio1() {

    const MAX_NUMEROS = 10000;
    const RANGO = 20;
    let json = {};

    for (let i = 0; i < MAX_NUMEROS; i++) {
        const key = Math.floor(Math.random() * RANGO + 1);
        json[key] ? json[key]++ : json[key] = 1;

        // if(json[key]) {
        //     json[key]++
        // } else {
        //     json[key] = 1;
        // }
    }    
    console.log(json);
};

// ejercicio1();


// ----------------------------------------------------------------------

// Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:

// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

// Aclaración: todos los valores monetarios serán expresados con 2 decimales

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
];

function ejercicio2() {
    const arrayDeNombres = productos.map( el => el.nombre);
    console.log("Array de nombres: ", arrayDeNombres);
    const arrayDePrecios = productos.map( el => el.precio);
    const precioTotal = arrayDePrecios.reduce( (prev, curr) => prev + curr).toFixed(2);
    // const precioTotal = (productos.map( el => el.precio)).reduce( (prev, curr) => prev + curr).toFixed(2);
    console.log("precio Total: ", precioTotal);
    const precioPromedio = (precioTotal / arrayDePrecios.length).toFixed(2);
    console.log("Precio Promedio: ", precioPromedio);
    const ProductoMin = Math.min(...arrayDePrecios);
    console.log("producto con menor precio " + ProductoMin);
    const ProductoMax = Math.max(...arrayDePrecios);
    console.log("producto con mayor precio " + ProductoMax);

    const data = {
        arrayDeNombres,
        precioTotal,
        precioPromedio,
        ProductoMin,
        ProductoMax
    }
    console.log("Todos los datos juntos: ", data);
};

// ejercicio2();