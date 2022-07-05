const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb://root:@localhost:3306/sistema');
const queryInterface = sequelize.getQueryInterface();

const productos = sequelize.define('Productos', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
        nombre: {type: DataTypes.STRING(15), allowNull: false},
        codigo: {type: DataTypes.STRING(10), allowNull: false},
        precio: {type: DataTypes.FLOAT},
        stock: {type: DataTypes.INTEGER},
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
});

queryInterface.createTable('productos', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
  nombre: {type: DataTypes.STRING(15), allowNull: false},
  codigo: {type: DataTypes.STRING(10), allowNull: false},
  precio: {type: DataTypes.FLOAT},
  stock: {type: DataTypes.INTEGER}
})

const chat = sequelize.define('chat', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    nombre: {type: DataTypes.STRING(50), allowNull: false},
    text: {type: DataTypes.STRING(1000), allowNull: false},
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

const carrito = sequelize.define('carrito', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    timestamp: {type: DataTypes.DATE, allowNull: false},
    productos: {type: DataTypes.STRING(5000), allowNull: false}
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});


// carrito = {
//     id, 
//     timestamp(carrito), 
//     productos: { 
//         id, 
//         timestamp(producto), 
//         nombre, descripcion, 
//         código, foto (url), 
//         precio, stock 
//     }
// }

// USE SISTEMA
// DROP TABLE IF EXISTS CHAT;
// CREATE TABLE chat (
//     id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
//     nombre VARCHAR(50) NOT NULL,
//     text VARCHAR(1000) NOT NULL)

//----carrito
// CREATE TABLE carrito (
//     id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
//     timestamp TIME NOT NULL,
//     productos VARCHAR(5000) NOT NULL)


module.exports = {
    productos,
    chat,
    carrito
}