import express from 'express';
const routeSuperficie = express.Router();
import { superficieCuadrado, superficieRectangulo, superficieCirculo } from '../controllers/superficieController';

routeSuperficie.get('/scuadrado', superficieCuadrado);
routeSuperficie.get('/srectangulo', superficieRectangulo);
routeSuperficie.get('/scirculo', superficieCirculo);

export default routeSuperficie