const { Sequelize, Model } = require('sequelize');
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
        console.log("Connection has been established");
    } catch (e) {
        console.log("Error de conexion: ", e);
    }
}

const connectMong = async () => {
    try {
        const CS = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(CS);
    } catch (error) {
        
    }
}

module.exports = {
    connectSQL,
    connectMong
}