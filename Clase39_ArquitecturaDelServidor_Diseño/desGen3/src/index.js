// Tomando como base el proyecto  del desafío anterior, crear un objeto singleton llamado PrimeraConexion que me permita obtener la hora de conexión,  mediante el método obtenerHora, del primer cliente que se conecte a la ruta '/datos'.
// El objeto se debe instanciar dentro de dicha ruta y en cada solicitud debe informar esa hora inicial.

const express = require ('express');
const app = express();
const routes = require('./routes/index.js');
const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`);
})

