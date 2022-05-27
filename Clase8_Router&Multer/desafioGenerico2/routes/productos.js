const router = require('express').Router();
let mascotas = [];

router.get('/productos', (req, res) => {
    res.json(mascotas);
});

router.post('/productos', (req, res) => {
    console.log(req.body);
    const { nombre, raza, edad } = req.body;
    mascotas.push({ nombre, raza, edad });
    res.json(mascotas);
});

module.exports = router;