const mongoose = require('mongoose');
const carritoCollection = 'carrito';

const carritoSchema = new mongoose.Schema({
    id: {type: String, required: true},
    timestamp: { type: Date, default: Date.now, required: true},
    productos: { type: [{}], required: true}
});

const carrito = new mongoose.model(carritoCollection, carritoSchema);

module.exports = {
    carrito
}