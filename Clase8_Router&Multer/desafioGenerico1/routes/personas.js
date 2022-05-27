import express from 'express'
const router = express.Router();

let personas = [];

router.get('/personas', (req, res) => {
    res.json(personas);
});

router.post('/personas', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    personas.push({ nombre, apellido, edad });
    res.json(personas);
});

export default router;
// module.exports = router;