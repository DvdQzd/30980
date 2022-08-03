// 1 -> Instalar .dotEnv
// 2 -> Agregar require("dotenv").config();
// 3 -> Desde cualquier parte de la app, levantan con proccess.env._NOMBREDELAVARIABLE_

require("dotenv").config();
const { server } = require('./config/config');
const express = require('express');
const app = express();
const session = require('express-session');
const router = require('./routes/personas');
const routerAuth = require('./routes/authentication');
const routerUser = require('./routes/users');
const passport = require('passport');
require('./middlewares/auth');

console.log("server", server);
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
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(routerAuth);
app.use(routerUser);
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(server.port, () => {
    console.log(`server running on port ${server.port}`);
});