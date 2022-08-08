// Realizar una aplicación en Node.js que permita recibir como parámetros una cantidad ilimitada de números, con los cuales debe confeccionar el siguiente objeto (se imprimirá por consola):
// En el caso de ingresar un número no válido, se creará un objeto de error con el siguiente formato (se imprimirá por consola):
// Si no ingresó ningún número, el objeto de error será:

let numeros = [];
let trash = process.argv.shift();


( () => {
    
    if( process.argv.length > 1) {
        let ejec = process.argv.shift().split("/");
            const pid = process.pid;

            numeros = process.argv.map( el => parseInt(el) || el);
            const check = numeros.every( el => typeof(el) === 'number');
            
            if( check ) {
                const av = numeros.reduce( (acc, nv) => acc + nv, 0) / numeros.length;
                const max = Math.max(...numeros);
                const min = Math.min(...numeros);
                const archivo = ejec[ejec.length - 1];
                console.log( `{
                    Datos: {
                        numeros: ${numeros},
                        promedio:  ${av},
                        max: ${max},
                        min: ${min},
                        ejecutable: ${archivo}
                        pid: ${pid}
                    }}`
                );
            } else {
                console.log(
                    `{
                        error: {
                            descripcion: Error de tipo,
                            numeros: ${process.argv}
                            tipo: ${numeros.map( el => (typeof(el)))}
                    }}`
                )
            }
    } else {
        console.log( `{
            Error: {
                descripcion: Entrada Vacia   
            }}`
        );
    }
})();