export class Perimetro {

    constructor() {
    }

    getCuadrado(lado1:number) {
        return {
            tipo: "perimetro",
            figura: "cuadrado",
            entrada: lado1,
            resultado: lado1*4
        }
    }

    getRectangulo(lado1:number, lado2:number) {
        return {
            tipo: "perimetro",
            figura: "rectangulo",
            entrada: { 
                lado1,
                lado2
            },
            resultado: lado1*2 + lado2*2
        }
    }

    getCirculo(radio:number) {
        return {
            tipo: "perimetro",
            figura: "circulo",
            entrada: radio,
            resultado: (2 * radio * Math.PI).toFixed(2)
        }
    }
}