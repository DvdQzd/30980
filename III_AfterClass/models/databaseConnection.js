const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
var mysql = require('mysql');

const sequelize = new Sequelize('sistema', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    password: ''
});

const connectSQL = async () => {

    try {
        await sequelize.authenticate();
        console.log("Connection has been established to SQL");
    } catch (e) {
        console.log("Error de conexion SQL: ", e);
    }
}

const connectMongo = async () => {
    try {
        const CS = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(CS);
        console.log("Connection has been established to Mongo");
    } catch (e) {
        console.log("Error de conexion Mongo: ", e);
    }
}

module.exports = {
    connectSQL,
    connectMongo
}