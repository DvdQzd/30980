import { Perimetro } from "../lib/perimetro";
const perimetro = new Perimetro();

const perimetroCuadrado = (req:any, res:any) => {

    const { lado1 } = req.query;

    if(!lado1) {
        return res.status(400).send("Bad request");
    }

    const result = perimetro.getCuadrado(lado1);
    res.status(200).json(result);
};

const perimetroRectangulo = (req:any, res:any) => {

    const { lado1, lado2 } = req.query;

    if(!lado1 || !lado2) {
        return res.status(400).send("Bad request");
    }

    const result = perimetro.getRectangulo(lado1, lado2);
    res.status(200).json(result);
};

const perimetroCirculo = (req:any, res:any) => {

    const { radio } = req.query;

    if(!radio) {
        return res.status(400).send("Bad request");
    }

    const result = perimetro.getCirculo(radio);
    res.status(200).json(result);
};

export {
    perimetroCuadrado,
    perimetroRectangulo,
    perimetroCirculo
}