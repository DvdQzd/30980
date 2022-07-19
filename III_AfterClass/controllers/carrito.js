const uuid = require('uuid');
const { productos } = require('../models/productos');
const { carrito } = require('../models/carrito');


const getCarritoById = async (req, res) => {
    const { id } = req.query;
    
    try {
        const result = await carrito.findOne(id);
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send(`Error al obtener carrito, id: ${id}: `, e); 
    }
};

const createCarrito = async ( req, res) => {
    const newCarrito = {
        id: uuid.v4(),
        timestamp: Date.now(),
        productos: []
    };

    try {
        const result = await carrito.create(newCarrito);
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send(`Error al crear carrito, id: ${newCarrito.id}: `, e); 
    }
};

const addProductoToCarrito = async (req, res) => {

    try {
        const { id, id_prod } = req.params;
        const { dataValues } = await productos.findByPk(id_prod);
        const result = await carrito.updateOne({id: id}, {
            $push: {productos: dataValues}
        })        

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Error al insertar un producto en el carrito: ", e);
    }
};

const deleteProductFromCarrito = async (req, res) => {
    try {
        const { id } = req.params;
        const id_prod = parseInt(req.params.id_prod);
        const result = await carrito.updateOne({id: id}, {
            $pull: {productos: {id: id_prod}}
        })    
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Error al borrar un producto del carrito: ", e)
    }
}

const deleteCarrito = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await carrito.deleteOne({id: id});
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Error al eliminar carrito: ", e)
    }
}

module.exports = {
    getCarritoById, 
    createCarrito, 
    addProductoToCarrito, 
    deleteProductFromCarrito, 
    deleteCarrito
}