const router = require('express').Router();

let mascotas = [];


// hacer es un ejemplo de middleware hecho por nosotros
router.get('/', hacer, (req, res) => {
    res.json(mascotas);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const { nombre, raza, edad } = req.body;
    mascotas.push({ nombre, raza, edad });
    res.json(mascotas);
});

function hacer(req, res, next) {
    console.log("request body: ", req.body);
    next();
}

module.exports = router;