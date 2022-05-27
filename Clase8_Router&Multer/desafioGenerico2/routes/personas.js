const router = require('express').Router();

let personas = [];

router.get('/', (req, res) => {
    res.json(personas);
});

router.post('/', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    personas.push({ nombre, apellido, edad });
    res.json(personas);
});

module.exports = router;