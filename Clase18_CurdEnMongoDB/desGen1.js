// - Utilizando Mongo shell, realizar las siguientes acciones:
// - Crear una base de datos en MongoDB llamada 'empresa'.
// - Crear una colección llamada 'clientes' dentro de esa base.
// - Insertar un documento en la colección clientes que contenga los campos ‘nombre’ y ‘edad’.
// - Insertar un array de tres documentos con el mismo formato y valores distintos en la colección clientes (modo bulk).
// - Utilizando un sólo comando, crear una colección llamada 'articulos' e insertar dentro de ella un array 
//    de cuatro documentos con los campos ‘nombre’, ‘precio’ y ‘stock’.
// - Mostrar las colecciones de la base 'empresa'.
// - Listar todos los documentos dentro de cada una de las colecciones.
// - Tomar el Object ID de uno de los documentos y comprobar fecha y hora de creación.
// - Mostrar la cantidad de documentos que tiene la colección articulos.



// use empresa;

db.clientes.insertOne({
    "nombre": "Cosme", "edad": 23
});

db.clientes.insertMany([
    {"nombre": "John", "edad": 32},
    {"nombre": "Hernan", "edad": 12},
    {"nombre": "Fulanito", "edad": 13}
]);


db.articulos.insertMany([
    {"nombre": "computadora", "precio": 215000, "stock": 10},
    {"nombre": "monitor", "precio": 12345, "stock": 8},
    {"nombre": "teclado", "precio": 15000, "stock": 15},
    {"nombre": "mouse", "precio": 12250, "stock": 20}
]);

// db.clentes.find();
// db.articulos.find();

// db.clentes.estimatedDocumentCount() --> Devuelva la cantidad de documentos que contiene la collection

