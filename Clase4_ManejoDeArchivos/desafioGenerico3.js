// Realizar un programa que ejecute las siguientes tareas:
// A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
// B) Mostrar este objeto info en la consola.
// C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
// D) Mostrar los errores por consola.
// Aclaraciones:
// Trabajar con fs.promises (then/catch).

// Ayuda:
// Para el punto 3 considerar usar JSON.stringify(info.contenidoObj, null,2) para preservar el formato de representación del objeto en el archivo.


// const fs = require('fs').promises; // si pongo el promise aca, no necesito usarlo en cada instruccion, por ejemplo quedaria fs.readFile directamente
const fs = require('fs');
console.clear();


// ASINCRONICO CON PROMISES

( async () => {

    try {
        
        const info = JSON.parse(await fs.promises.readFile('info.txt'));
        info.author = "Coderhourse";
        await fs.promises.writeFile('package.json.coder', JSON.stringify(info, null, 2));
        
        console.log("!Done");
    } catch (e) {
        console.log("Error, se ha rompido todo por los aires: ", e.message);
    }
})();


// (  () => {
//     fs.promises.readFile('info.txt')
//         .then( file => {
//             const info = JSON.parse(file);
//             info.author = "Coderhouse";
//             fs.promises.writeFile('package.json.coder', JSON.stringify(info, null, 2)).then( arg => {
//                 console.log("Escritura realizada");
//             });
//     }).catch( e => {
//         console.log("Error", e);
//     }).finally( () => {
//         console.log("done!");
//     })
// })()