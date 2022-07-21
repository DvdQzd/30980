// Modificar el resultado del desafío de session de la clase anterior para que almacene las sesiones de usuario en el file system; en vez de que su persistencia sea en la memoria del servidor.
// La carpeta destino será 'sesiones' y estará creada en el directorio anterior al proyecto.
// Verificar que con las distintas sesiones de usuario se crean archivos dentro de esa carpeta, cuyos nombres corresponden a las cookies de sesión activas.
// Fijar la duración del tiempo de vida de la sesión y de su cookie de 1 minuto. 
// Analizar los resultados.


const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const router = require('./router/sessionRouter');
const app = express();
const PORT = 8080;

app.use(session({
    store: new fileStore({
        path: './sesiones',
        ttl: 60,
        retries: 0
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