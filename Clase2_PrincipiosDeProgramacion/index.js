console.clear();

//---------------------------------------------
// PARA LOS QUE TENGAN WINDOWS Y QUIERAN INSTALAR NODEMON, PROBABLEMENTE TENGAN QUE HACER ESTO:
// ABRIR POWERSHELL COMO ADMIN Y EJECUTAR EL SIGUIENTE COMANDO:
// Set-ExecutionPolicy Unrestricted

// PARA LOS QUE USEN UNIX O LINUX CON SUDO ALCANZA

// PARA CORRER EL SCRIPT CON NODEMON:

// nodemon __nombreDelScript__

//---------------------------------------------

// const personas = {
//     nombre: "Cosmes",
//     apellido: "Fulanito",
//     edad: 32
// }

// console.log(personas);

// personas.nombre = "OTRO FULANITO";

// console.log(personas);


// // ------------------ FUNCIONES

// const mostrarLista = function devolverLaLista(a,b) {

//     return a + b;
// }

// console.log(mostrarLista);

// // function lamejorfuncion(a, b, c) {
// //     console.log(a);
// //     a = b * c;
// //     return a;
// // }

// const GrabaLista = () => {

// }

// console.log(GrabaLista);


// (() => {
//     // conectar a base de datos
//     // console.log(numero * multiplicador)
    
// })();

// // SCOPE
// ( () => {
//     let variable1; // variable global dentro de la funcion anonima
//     for (let i = 0; i < 100; i++) {
//         let contador;
//         console.log(contador++); 
//     }
// });

// function sumas(a) {
//     return function( numero ) {
//         console.log( numero + a)
//     }
// }

// const miSuma = sumas(3);
// miSuma(5);


// DESAFIO GENERICO 1
// Definir la función mostrarLista que reciba una lista de datos y muestre su contenido si no está vacía, 
// o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien 
// en ambos casos.

// function mostrarLista(argumento) {
//     if(!argumento || argumento.length === 0){
//         return "Lista vacia";
//     }

//     return argumento;
// }

// console.log( mostrarLista());
// console.log( mostrarLista(2));
// console.log( mostrarLista([2,3,4,5]));

// Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.

// ( (arg1, arg2, arg3) => {
//     console.log(arg1);
//     console.log(arg2);
//     console.log(arg3);
// })(2, 3, 4);

// ( (argumento) => {
//     console.log(...argumento);
// })([2, 3, 4]);

//  Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

// function crearMultiplicador( multiplicador) {
//     return (numero) => {
//         console.log(numero*multiplicador);
//     }
// };

// const Duplicar = crearMultiplicador(2);
// const Triplicar = crearMultiplicador(3);

// Duplicar(5);
// Triplicar(5);


// class NombreDeLaClase {
//     static saludo = "hola mundo";
//     constructor(nombre){
//         this.nombre = nombre;   
//     }
// }

// const primeraObjeto = new NombreDeLaClase("cosmes");
// const segundoObjeto = new NombreDeLaClase("fulanito");

// console.log(primeraObjeto);

// reduce javascript
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros.reduce((prev, current) => prev + current,0));


// 4)    Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
// 5)    Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
// 6)    Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
// 7)    Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general

// class Contador {
//     static cuentaGlobal = 0;
    
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.contador = 0;
//     }
    
//     obtenerResponsable() {
//         return this.nombre;
//     }

//     obtenerCuentaIndividual() {
//         return this.contador;
//     }

//     obtenerCuentaGlobal() {
//         return Contador.cuentaGlobal;
//     }

//     contar() {
//         this.contador++;
//         Contador.cuentaGlobal++;
//     }
// }

// const Cosmes = new Contador("cosmes");
// const Fulanito = new Contador("Fulanito");

// console.log(Cosmes);

// Cosmes.contar();
// Cosmes.contar();

// Fulanito.contar();

// console.log("Cosmes Individual: ", Cosmes.obtenerCuentaIndividual());
// console.log("Fulanito Individual: ", Fulanito.obtenerCuentaIndividual());

// console.log("Cuenta global desde Cosmes", Cosmes.obtenerCuentaGlobal());
// console.log("Cuenta global desde Fulanito", Fulanito.obtenerCuentaGlobal());