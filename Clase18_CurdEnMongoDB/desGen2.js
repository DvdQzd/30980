// -- Sobre la base y los datos cargados anteriormente
// -- Insertar cinco documentos más en la colección clientes con los siguientes datos:
// -- { "nombre" : "Pablo", "edad" : 25 }
// -- { "nombre" : "Juan", "edad" : 22 }
// -- { "nombre" : "Lucia", "edad" : 25 }
// -- { "nombre" : "Juan", "edad" : 29 }
// -- { "nombre" : "Fede", "edad" : 35 }
// -- Listar todos los documentos de la colección clientes ordenados por edad descendente.
// -- Listar el cliente más joven.
// -- Listar el segundo cliente más joven.
// -- Listar los clientes llamados 'Juan'
// -- Listar los clientes llamados 'Juan' que tengan 29 años.
// -- Listar los clientes llamados 'Juan' ó 'Lucia'.
// -- Listar los clientes que tengan más de 25 años.
// -- Listar los clientes que tengan 25 años ó menos.
// -- Listar los clientes que NO tengan 25 años.
// -- Listar los clientes que estén entre los 26 y 35 años.
// -- Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
// -- Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
// -- Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.

id - nombre - apellido - habilitado
33                        -1


db.clientes.insertMany([
    { "nombre" : "Pablo", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 22 },
    { "nombre" : "Lucia", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 29 },
    { "nombre" : "Fede", "edad" : 35 },
    { "nombre": "John", "edad": 32},
    { "nombre": "Hernan", "edad": 12},
    { "nombre": "Fulanito", "edad": 13},
    { "nombre": "Cosme", "edad": 23 },
    { "nombre": "Juana", "edad": 2 }
]);

db.clientes.find().sort({"edad": -1});
-- SELECT * FROM CLIENTES ORDER BY EDAD DESC

db.clientes.find().sort({"edad": 1}).limit(1);
-- SELECT * FROM CLIENTES ORDER BY EDAD ASC LIMIT 1

db.clientes.find().sort({"edad": 1}).skip(1).limit(1);
-- SELECT * FROM CLIENTES ORDER BY EDAD ASC LIMIT 1 OFFSET 1

db.clientes.find({"nombre": "Juan"});
// db.clientes.find({"nombre": /Juan/i}); --> esto una busqueda con RegExp para que no distinga entre mayusculas y minusculas
// select * from clientes where nombre like 'Juan' --> sensitive case
// select * from clientes where nombre ilike 'juan' --> insensitive case

db.clientes.find(  { $and: [
    {"nombre": /juan/i},
    {"edad": 29}
]});
-- select * from clientes where edad = 29 and nombre like 'juan'

db.clientes.find( { $or: [
    {"nombre": /juan/i},
    {"nombre": /lucia/i},
]});
--select * from clientes where lower(nombre) IN ('juan',  'lucia')

db.clientes.find( { "edad":  {$lte: 25}})
--select * from clientes where edad <= 25

db.clientes.find( { "edad": { $ne: 25 }} );
--select * from clientes where edad NOT IN 25

db.clientes.find( { $and: [
    {"edad": { $gte: 25}},
    {"edad": { $lte: 35}}
]});
--select * from clientes where edad >= 25 and edad <= 35

db.clientes.updateOne({"nombre": "Fede"}, { $set: {"edad": 36}})

db.clientes.updateMany({"edad": 25}, { $set: {"edad": 26}});

db.clientes.remove({"nombre": "Juan"});

db.clientes.remove({"nombre": "Cosme"});


db.createUser({
    user: "escritor",
    pwd: "qwerty123",
    roles: [
        { role: "readWrite", db: "empresa"}
    ]
});