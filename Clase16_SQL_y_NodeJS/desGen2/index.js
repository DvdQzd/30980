const { options } = require('./config/sqlite3');
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
        
        const tableExists = await knex.schema.hasTable("articulos");
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
        
        await knex('articulos').insert(articulos);
        console.log("Articulos insertados!!");

        let result = await knex('articulos').select('*');
        console.log(result);

        result = await knex('articulos').where("id", "=", "3").del();
        console.log(result);
        
        result = await knex('articulos').where("id", "=", "2").update({stock: 0});
        console.log("Articulos actualizados!");

        result = await knex('articulos').select('*');
        console.log(result)
    } catch (e) {
        console.log("Error: ", e);
    }
})();