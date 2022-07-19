const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb://root:@localhost:3306/sistema');
const queryInterface = sequelize.getQueryInterface();


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

// queryInterface.createTable('chat', {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
//   nombre: {type: DataTypes.STRING(15), allowNull: false},
//   nombre: {type: DataTypes.STRING(1000), allowNull: false},
// });


module.exports = {
    chat
}