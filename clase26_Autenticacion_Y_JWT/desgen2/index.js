const express = require('express');
const { engine } = require('express-handlebars');
const routes = require('./routes/router');
const app = express();
const PORT = 8000;

app.engine('handlebars', engine()); // esta linea en las diapositivas figura mal, esta es la manera actual
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(routes);

app.listen( PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});