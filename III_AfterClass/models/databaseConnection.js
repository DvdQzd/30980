const { Sequelize, Model } = require('sequelize');
var mysql = require('mysql');

const sequelize = new Sequelize('sistema', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    password: ''
});

const connect = async () => {

    try {
        await sequelize.authenticate();
        console.log("Connection has been established");
    } catch (e) {
        console.log("Error de conexion: ", e);
    }
}

module.exports = {
    connect
}