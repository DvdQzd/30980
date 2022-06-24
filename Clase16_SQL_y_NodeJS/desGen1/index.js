// Realizar un proyecto en Node.js que se conecte a la base de datos llamada ecommerce implementada en MariaDB y ejecute las siguientes procesos:
//  Debe crear una tabla llamada articulos con la siguiente estructura:
//  Campos: 
//     - nombre tipo varchar 15 caracteres no nulo
//     - codigo tipo varchar 10 caracteres no nulo
//     - precio tipo float
//     - stock tipo entero
//     - id clave primaria autoincremental no nula
// Insertar 5 articulos en esa tabla, con datos de prueba con stocks positivos 
// Listar la tabla mostrando los resultados en la consola
// Borrar el articulo con id = 3
// Actualizar el stock a 0 del articulo con id = 2
// Notas:
// - Crear un único archivo ejecutable a través de node.js que realice lo pedido. Considerar que estos son procesos asincrónicos que devuelven promesas y deben ser anidados para mantener el orden de operación. Utilizar la sintaxis then/catch
// - Agregar como primera acción que, en caso de existir la tabla, la borre (drop), así al ejecutar estas mismas tareas, empezamos desde cero sin errores y datos residuales.


const { options } = require('./config/mariaDB');
const knex = require('knex')(options);

const articulos = [
    { nombre: "remera", codigo:"RR11", precio: 923.25, stock: 3},
    { nombre: "camisa", codigo:"CC22", precio: 999.999, stock: 5},
    { nombre: "pantalon", codigo:"PP3321", precio: 5002.12, stock: 6},
    { nombre: "zapatillas", codigo:"ZZ4531", precio: 6021.25, stock: 1},
    { nombre: "botines", codigo:"BB21121", precio: 8025.01, stock: 8}
];

( async () => {
    

    try {
        const tableExists = await knex.schema.hasTable('articulos');
        console.log(tableExists);

    if(tableExists) {
        await knex('articulos').del();
    } else {
        const resp = await knex.schema.createTable('articulos', table => {
            // table.integer('user_id').primary('email',{constraintName:'users_primary_key',deferrable:'deferred'})
            // table.integer('id').primary('id', {constraintName:'users_primary_key',deferrable:'deferred'});
            table.increments('id', {primaryKey: true});
            table.string('nombre', 30).notNullable();
            table.string('codigo', 15).notNullable();
            table.float('precio');
            table.integer('stock');
        });
        console.log("Response: ", resp);
    }

    // INSERT INTO ARTICULOS (NOMBRE, codigo, precio, stock) VALUES ('asdasjd', 123123)
    // await knex('articulos').insert(articulos);
    await knex('articulos').insert(articulos);
    // console.log("Articulos insertados!!");

    let result = await knex('articulos').select('*');
    console.log(result);

    // result = await knex('articulos').where("id", "=", "3").del();
    // console.log(result);
    
    // result = await knex('articulos').where("id", "=", "2").update({stock: 0});
    // console.log("Articulos actualizados!");


    // result = await knex('articulos').select('*');
    // console.log(result)
    } catch (e) {
        console.log("Error: ", e);
    }
    
})();