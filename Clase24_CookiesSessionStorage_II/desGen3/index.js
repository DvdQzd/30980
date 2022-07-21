// // Realizar nuevamente el desafío “Guardar datos en File System” pero esta vez persistiendo las sesiones de usuario en Redis.

// // Fijar un tiempo de vida de la sesión de 1 minuto que será recargada en cada visita del cliente al sitio.
// // Acceder con dos clientes distintos y verificar que las sesiones respectivas hayan sido creadas en la base.
// // Comprobar los datos y el tiempo de vida de las sesiones en la base verificando que cuando se extingan desaparezcan de la misma y que el usuario quede automáticamente deslogueado de su sesión.

const express = require('express');
const session = require('express-session');
const { createClient } = require('redis');
const redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);
const redisStore = require('connect-redis')(session);
const router = require('./router/sessionRouter');
const app = express();
const PORT = 8080;

app.use(session({
    store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: redisClient,
        ttl: 60
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