// Realizar un programa que:
// A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
// B) Lea nuestro propio archivo de programa y lo muestre por consola.
// C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

const fs = require('fs');
console.clear();

// ASINCRONICO
( () => {
    const fyh = Date().toLocaleString();
    const nombreDelArchivo = 'fyh.txt';
    const nombreDeUnArchivoInexistente = 'noexiste.txt';
    
    try {
        fs.writeFileSync(nombreDelArchivo, fyh);
        const response = fs.readFileSync(nombreDelArchivo, 'utf-8');
        console.log(response);
    } catch (e) {
        console.log("No se ha encontrado el archivo");
    }


    // setInterval( () => {
    //     console.log()
    // }, 500)  // esto es para mostrar como corta el programa si no hay trycatch, y como el programa sigue si existe trycatch
})();