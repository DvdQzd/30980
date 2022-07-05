const uuid = require('uuid');
const { carrito, productos } = require('../models/modelo');
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

const mockProducto = {
    id: 1, 
    timestamp: Date(),
    nombre: 'MockProduct',
    descripcion: 'MockDescription',
    codigo: uuid.v4(),
    foto: 'MockUrl',
    precio: 123,
    stock: 15
};

let carritos = [];

const getAllCarrito = (req, res) => {
    res.status(200).send(productos);
};

const addCarrito = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);
        // const findProduct = productos.findByPk(id);
        
        const addItemCarrito = {
            timestamp: Date(),
            productos: JSON.stringify(mockProducto)
        }

        await carrito.create(addItemCarrito);
        res.status(200).json({message: "producto agregado"});
    } catch (e) {
        console.log(e);
        res.status(500).send("Ha roto por los aires");
    }
};

const getById = (req, res) => {
    const { id } = req.params;
    
    const response = getProductById(id);

    res.status(200).send(response);
}

const updateCarrito = async (req, res) => {

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
    addCarrito
}