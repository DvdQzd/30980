const express = require('express');
const app = express();
const PORT = 8080;
const { mockCarrito } = require('./mocks/mocks');

app.use('/mock-carrito', (req, res) => {
    const { cant } = req.query;
    res.status(200).send(mockCarrito(cant));
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});