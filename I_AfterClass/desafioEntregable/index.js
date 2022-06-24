// Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.

// Aspectos a incluir en el entregable: 
// El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
// Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
// 200e archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
// Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
// Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
// El formato de cada producto será : 

const fs = require('fs');

class Contenedor {

    static id = 0;
    productos = [];

    constructor(fileName) {
        this.fileName = fileName;

        if (fs.existsSync(this.fileName)) { 
            
                fs.readFile(this.fileName, (err, file) => {

                    this.productos = JSON.parse(file);
                    if (err) {
                        return "Error";
                    }

                    Contenedor.id = this.productos.length;
                    console.log(Contenedor.id);
                });
        }
    };

    save(producto) {
        Contenedor.id++;
        producto.id = Contenedor.id;

        this.productos.push(producto);
        fs.promises.writeFile( this.fileName, JSON.stringify(this.productos, null, 2) );
        return Contenedor.id;
    };


    // getById();
    // getAll();
    // deleteById();
    // deleteAll();
}


const primerProducto = {
        title: 'computadora',
        price: 150000,
        thumbnail: '(url de la foto del producto)'
};

const segundoProducto = {
    title: 'monitor',
    price: 1000,
    thumbnail: '(url de la foto del producto)'
};


const gestor = new Contenedor('Archivo.txt');

( async () => {
    await gestor.save(primerProducto);
    await gestor.save(segundoProducto);

})()

gestor.save(segundoProducto);
