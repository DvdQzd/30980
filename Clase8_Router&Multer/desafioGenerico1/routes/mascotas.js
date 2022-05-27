// const router = require('express').Router();
import express from 'express';
const router = express.Router();


let mascotas = [];

router.get('/mascotas', (req, res) => {
    res.json(mascotas);
});

router.post('/mascotas', (req, res) => {
    console.log(req.body);
    const { nombre, raza, edad } = req.body;
    mascotas.push({ nombre, raza, edad });
    res.json(mascotas);
});

export default router;
// module.exports = router;