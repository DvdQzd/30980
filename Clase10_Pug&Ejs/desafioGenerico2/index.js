// Realizar el mismo ejercicio que en el desafío anterior, utilizando ejs.

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});