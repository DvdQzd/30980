// Transformar el primer desafío, pero esta vez la página dinámica la creará el servidor desde handlebars instalado y configurado para trabajar con express.
// Utilizar la misma estructura de plantilla HTML dentro de una pagina web con encabezado y el mismo objeto de datos.
// El servidor escuchará en el puerto 8080 y el resultado lo ofrecerá en su ruta root.

const express = require('express');
const app = express();
const PORT = 8080;
const { engine } = require('express-handlebars');

app.engine('handlebars', engine()); // esta linea en las diapositivas figura mal, esta es la manera actual
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    const datos = {
        nombre: 'Cosme',
        apellido: 'Fulanito',
        edad: '23',
        email: 'atr@cosme.com',
        telefono: '11223344'
    };

    res.render('datos', datos);
});

app.get('/productos', (req, res) => {
    const datos = {
        producto: 'teclado',
        descripcion: 'una descripcion',
        precio: '23',
    };

    res.render('productos', datos);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});