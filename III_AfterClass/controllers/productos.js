const uuid = require('uuid');
const { productos } = require('../models/productos');

const getAllProducts = async (req, res) => {
    const result = await productos.findAll();
    res.status(200).send(result);
};

const addProducts = async (req, res) => {
    console.log(req.body);
    try {
        const {nombre, descripcion, codigo, foto, precio, stock } = req.body;
        const producto = {
            timestamp: Date.now(),
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock
        }

        const result = await productos.create(producto);
        res.status(200).json({message: "producto agregado", result});
    } catch (e) {
        console.log(e);
        res.status(500).send("Ha roto por los aires");
    }
};

const getProductById = async (req, res) => {

    try {        
        const { id } = req.params;

        const response = await productos.findByPk(id);   
        res.status(200).send(response);
    } catch (e) {
        console.log("Error al leer producto en la DB: ", e);
    }
}

const updateProducts = async (req, res) => {

    try {
        const { id } = req.params;

        const result = await productos.update(req.body, {
                where: { id: id}
        });
        res.status(200).json(result);
    } catch (e) {
        console.log("Error actualizando productos: ", e);
    }
};

const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await productos.destroy({
                where: { id: id}
        });
        res.status(200).json(result);
    } catch (e) {
        console.log("Error borrando producto: ", e);
    }
}

module.exports = {
    getAllProducts,
    addProducts,
    getProductById,
    updateProducts,
    deleteProductById
}