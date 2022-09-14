// Crear una arquitectura de servidor node.js MVC que permita ingresar personas por nombre, apellido y DNI mediante un formulario ofrecido a través de sus rutas. 
// Por debajo del formulario se representarán en forma dinámica, los datos almacenados en memoria, en forma de tabla.

// Realizar este proceso utilizando HTML on wire, creando las rutas necesarias:

const express = require ('express');
const app = express();
const routes = require('./routes/index');
const PORT = 8081;
const { engine } = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', engine()); // esta linea en las diapositivas figura mal, esta es la manera actual
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(routes);

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`);
})

