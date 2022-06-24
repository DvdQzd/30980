const { Sequelize, Model } = require('sequelize');


const connect = async () => {
    const sequelize = new Sequelize('mariadb:://root:@localhost:3306/mibase');


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