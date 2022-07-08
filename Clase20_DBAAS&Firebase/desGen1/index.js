// Conectarse a la base MongoDB Atlas con los clientes CLI, Compass y Node.js
// Mediante la consola CLI insertar estos documentos en una base llamada ‘ecommerce’, colección ‘usuarios’:
// [
//     { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
//     { nombre: 'María', apellido: 'García', dni: '29575148' },
//     { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
//     { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
// ]
// A través de un proyecto Node.js, listar estos datos representándolos en la consola.
// Con el mismo proyecto, incorporar un usuario más: 
//  nombre: 'Federico', apellido: 'Perez', dni: '320118321' }
// Utilizar sintaxis de Promesas con async await e import para la importación de módulos.
// Con Compass borrar al usuario llamado Tomas.
// Con Mongo CLI actualizar el usuario llamado 'Carlos' al nombre 'Juan Carlos' y luego listar los documentos finales.

// mongodb+srv://cosme:Fulanito@cluster0.8iums.mongodb.net/?retryWrites=true&w=majority


const mongoose = require('mongoose');
const { usuarios } = require('./models/usuarios');

const users = [
    { nombre: 'Lucas', apellido: 'Blanco', dni: 30355874 },
    { nombre: 'María', apellido: 'García', dni: 29575148 },
    { nombre: 'Tomas', apellido: 'Sierra', dni: 38654790 },
    { nombre: 'Carlos', apellido: 'Fernández', dni: 26935670 }
];

( async () => {

    const CS = 'mongodb+srv://Cosme:Fulanito@cluster0.8iums.mongodb.net/ecommerce?retryWrites=true&w=majority';

    // const CS = 'mongodb://localhost:27017/colegio';
    // const sequelize = new Sequelize('mariadb:://root:@localhost:3306/mibase'); 

    
    try {
        await mongoose.connect(CS);

        // const response = await usuarios.insertMany(users);
        // console.log(response);


        const response = await usuarios.updateOne({dni: 26935670}, { $set: { nombre: 'Juan Carlos'}});

        console.log(response);
    } catch (e) {
        console.log("Error: ", e);
    }

})();


//------- PARA CONECTARSE DESDE LA TERMINAL


// mongosh "mongodb+srv://cluster0.8iums.mongodb.net/ecommerce" --apiVersion 1 --username "Cosme"