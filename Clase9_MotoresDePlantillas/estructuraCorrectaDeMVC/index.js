// Ejercicio de ejemplo, no esta en las diapositivas

const express = require('express');
const app = express();
const PORT = 8080;
const { engine } = require('express-handlebars');
const productos = require('./productos.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine()); // esta linea en las diapositivas figura mal, esta es la manera actual
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/producto', productos);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});