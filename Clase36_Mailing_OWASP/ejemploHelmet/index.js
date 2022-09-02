const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = 8081;

app.use(helmet());


app.get('/', (req, res) => {
    res.status(200).send("Un endpoint de nuestra aplicacion");
});



app.listen( PORT, () => {
    console.log('Running');
});