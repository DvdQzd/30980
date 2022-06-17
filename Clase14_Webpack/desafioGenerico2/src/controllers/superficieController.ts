import { Superficie } from "../lib/superficie";
const superficie = new Superficie();

const superficieCuadrado = (req:any, res:any) => {

    const { lado1 } = req.query;

    if(!lado1) {
        return res.status(400).send("Bad request");
    }

    const result = superficie.getCuadrado(lado1);
    res.status(200).json(result);
};

const superficieRectangulo = (req:any, res:any) => {

    const { lado1, lado2 } = req.query;

    if(!lado1 || !lado2) {
        return res.status(400).send("Bad request");
    }

    const result = superficie.getRectangulo(lado1, lado2);
    res.status(200).json(result);
};

const superficieCirculo = (req:any, res:any) => {

    const { radio } = req.query;

    if(!radio) {
        return res.status(400).send("Bad request");
    }

    const result = superficie.getCirculo(radio);
    res.status(200).json(result);
};

export {
    superficieCuadrado,
    superficieRectangulo,
    superficieCirculo
}