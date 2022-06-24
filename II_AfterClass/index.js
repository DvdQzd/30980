const express = require('express');
const app = express();
const routes = require('./routes/index');
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));


app.use(routes);

app.listen( process.env.PORT || PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})