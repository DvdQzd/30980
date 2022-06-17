const express = require('express');
const app = express();
const PORT = 8080;

const colors = require('./lib/colors');

app.get('/getColor', (req:any, res:any) => {
    const miColor = new colors();
    res.status(200).send(miColor.getColor());
});

app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`)});