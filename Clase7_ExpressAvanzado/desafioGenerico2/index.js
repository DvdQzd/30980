// 1) Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
// a) Ruta get '/api/sumar/5/6
// b) Ruta get '/api/sumar?num1=5&num2=62) 
// c) Ruta get '/api/operacion/5+6
// No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.

// 2) Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
// El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.status(200).send(`Resultado: ${num1 + num2}`);
});

///api/sumar?num1=5&num2=62
app.get('/api/sumar', (req, res) => {
    console.log(req.query)
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    res.status(200).send(`Resultado: ${num1 + num2}`);
});

app.get('/api/operacion/:nums', (req, res) => {
    const nums = eval(req.params.nums);
    res.status(200).send(`Resultado: ${nums}`);
});

app.post('/api', (req, res) => {
    res.status(200).send('ok');
})

app.put('/api', (req, res) => {
    res.status(200).send('ok');
})

app.delete('/api', (req, res) => {
    res.status(200).send('ok');
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});