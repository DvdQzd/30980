const express = require('express');
const app = express();
const PORT = 8080;

const colors = require('./lib/colors.ts');

app.get('/getColor', (req, res) => {
    const miColor = new colors();
    res.status(200).send(miColor.getColor());
});

app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`)});