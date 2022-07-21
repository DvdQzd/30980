// // Realizar nuevamente el desafío “Guardar datos en File System” pero esta vez persistiendo las sesiones de usuario en Mongo.

const express = require('express');
const session = require('express-session');
const router = require('./router/sessionRouter');
const mongoStore = require('connect-mongo');
const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const app = express();
const PORT = 8080;

app.use(session({
    store: mongoStore.create({
        mongoUrl: 'mongodb+srv://Cosme:Fulanito@cluster0.8iums.mongodb.net/ecommerce?retryWrites=true&w=majority',
        mongoOptions: advancedOptions,
        ttl: 60,
        collectionName: 'sessions'
    }),
    secret: "estoesunaresecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.use('/session', router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)    
});

// http://localhost:8080/session/root?nombre=cosme
// http://localhost:8080/session/olvidar