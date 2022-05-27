// Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listaapr y para agregar recursos:
// 	GET: devolverá la lista requerida en formato objeto.
// POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
// Persona -> { "nombre": ..., "apellido": ..., "edad":... }
// Mascota -> { "nombre":..., "raza":..., "edad":... }
// Utilizar el Router de express para definir las rutas base, implementando las subrutas en los métodos correspondientes.
// - Probar la funcionalidad con Postman.
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

import express from 'express';
import mascotasRouter from './routes/mascotas.js';
import personasRouter from './routes/personas.js';
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', mascotasRouter);
app.use('/', personasRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});