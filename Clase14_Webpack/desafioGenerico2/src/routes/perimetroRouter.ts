import express from 'express';
const routePerimetro = express.Router();
import { perimetroCuadrado, perimetroRectangulo, perimetroCirculo } from '../controllers/perimetroController';

routePerimetro.get('/pcuadrado', perimetroCuadrado);
routePerimetro.get('/prectangulo', perimetroRectangulo);
routePerimetro.get('/pcirculo', perimetroCirculo);

export default routePerimetro