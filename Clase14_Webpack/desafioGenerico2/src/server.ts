// Crear un proyecto basado en Webpack y Typescript que implemente un servidor node express cuyo punto de entrada será server.ts.
// Se implementará una clase llamada Perimetro que contenga tres métodos estáticos para calcular el perímetro de un cuadrado, un rectángulo y un círculo. Esta clase se guardará en un archivo llamado perimetro.ts 
// En otro archivo llamado superficie.ts se implementará una clase llamada Superficie que contenga tres métodos estáticos para calcular la superficie de las mismas tres figuras.
// Los dos módulos se importarán en server.js.
// Realizar los endpoints get que permitan recibir las peticiones de cálculo con los parámetros correspondientes. La respuesta será en formato objeto y representará el tipo de cálculo, la figura, los parámetros de entrada y el resultado.
// Implementar el tipado en todas las clases y funciones del servidor.
// Probar con el navegador ó cliente http todas las posibles variantes.


import express from 'express';
const app = express();
const PORT = 8080;
import routePerimetro from './routes/perimetroRouter';
import routeSuperficie from './routes/superficieRouter';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routePerimetro);
app.use(routeSuperficie);
app.use('*', (req, res) => {
    res.status(301).send("forbidden!");
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
});