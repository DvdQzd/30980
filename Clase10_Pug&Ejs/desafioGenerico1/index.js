// Realizar un servidor que reciba por query params (mediante la ruta get '/datos') el valor que debe representar una barra de medición (usando el tag de html meter). 
// Asimismo recibirá además los valores mínimos y máximos permitidos y el título que se pondrá por arriba de la barra, en un elemento h1 en color azul (debe permitir formato HTML).

// Ejemplo de petición:
// http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>

// Como respuesta a este request, el servidor devolverá al frontend una plantilla armada con los datos recibidos.
// Utilizar pug integrado a express, manejando una plantilla común y una particular con la representación requerida.

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const { min, nivel, max, titulo} = req.query;
    res.render('nivel.pug', {min, nivel, max, titulo});
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})