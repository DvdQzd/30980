// ARMAR UN MIDDLEWARE DE AUTENTICACION

const express = require('express');
const app = express();
const session = require('express-session');
const router = require('./routes/personas');
const PORT = 8080;

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router)
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});