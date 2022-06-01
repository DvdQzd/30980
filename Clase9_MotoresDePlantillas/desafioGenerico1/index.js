// Importar Handlebars vía CDN en el frontend para crear dicha vista en forma dinámica. Esta página será servida desde el espacio público de un servidor basado en node.js y express.

const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});