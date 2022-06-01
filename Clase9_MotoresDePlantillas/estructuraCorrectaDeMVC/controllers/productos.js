
const mostrarProductos = (req, res) => {
    // const { datos } = req.body;
    const datos = {
        producto: 'teclado',
        descripcion: 'una descripcion',
        precio: '23',
    };
    
    res.render('productos', datos);
}

const agregarProductos = (req, res) => {
    // const { datos } = req.body;
    const datos = {
        producto: 'teclado',
        descripcion: 'una descripcion',
        precio: '23',
    };
    
    res.render('productos', datos);
}

module.exports = {
    mostrarProductos,
    agregarProductos,
}