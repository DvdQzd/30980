const { connect } = require('./models/databaseConnection');
const { productos, createTableProductos } = require('./models/modelo');

const articulos = [
    {nombre: "remera", codigo:"RR11", precio: 923.25, stock: 3},
    {nombre: "camisa", codigo:"CC22", precio: 999.999, stock: 5},
    {nombre: "pantalon", codigo:"PP3321", precio: 5002.12, stock: 6},
    {nombre: "zapatillas", codigo:"ZZ4531", precio: 6021.25, stock: 1},
    {nombre: "botines", codigo:"BB21121", precio: 8025.01, stock: 8}
];

( async () => {
    try {
        await connect();

        console.log( '----------------------------------------------');
        const resp = await productos.findAll({raw: true});
        console.log(resp);
    } catch (e) {
        console.log("Error: ", e);
    }
})()