const uuid = require('uuid');
const { productos } = require('../models/modelo');
// producto = {
//     id,
//     timestamp,
//     nombre,
//     descripcion,
//     código,
//     foto (url),
//     precio,
//     stock
// }

let productos = [];

const getAllProducts = (req, res) => {
    res.status(200).send(productos);
};

const addProducts = (req, res) => {

    try {
        const {nombre, descripcion, fotoUrl, precio, stock } = req.body;
        const producto = {
            id: productos.length + 1,
            timestamp: Date.now(),
            nombre,
            descripcion,
            codigo: uuid.v4(),
            fotoUrl,
            precio,
            stock
        }

        productos.create(producto);
        res.status(200).json({message: "producto agregado", producto});
    } catch (e) {
        console.log(e);
        res.status(500).send("Ha roto por los aires");
    }
};

const getById = (req, res) => {

    try {        
        const { id } = req.params;

        const response = await productos.findById(id);    
        res.status(200).send(response);
    } catch (e) {
        console.log("Error al leer producto en la DB: ", e);
    }
}

const updateProducts = async (req, res) => {

    const { id } = req.params;
    const {nombre, descripcion, fotoUrl, precio, stock } = req.body;

    let prod = await getProductById(id);
    prod.nombre = nombre || prod.nombre ;
    prod.descripcion = descripcion || prod.descripcion ;
    prod.fotoUrl = fotoUrl || prod.fotoUrl ;
    prod.precio = precio || prod.precio ;
    prod.stock = stock || prod.stock ;

    const index = findIndex(id);
    productos.splice(index, prod);
    res.status(200).json({body: req.body, query: req.query, params: req.params});
};

const findIndex = (id) => {
    
    return new Promise((resolve, reject) => {
        idNumerico = Number.parseInt(id);

        if(isNaN(idNumerico)) {
            reject("el parametro debe ser numerico");
        }
        
        resolve( productos.findIndex( el => el.id === id));
    })
}

const getProductById = (id) => {

    return new Promise((resolve, reject) => {
        idNumerico = Number.parseInt(id);

        if(isNaN(idNumerico)) {
            reject("el parametro debe ser numerico");
        }

        const exists = productos.find( el => el.id === idNumerico);
        const result = exists ? exists : {message: "No se ha encontrado el producto"};
        resolve(result);
    })
}

module.exports = {
    getAllProducts,
    addProducts,
    getById,
    updateProducts
}