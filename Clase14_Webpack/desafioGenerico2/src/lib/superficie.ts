export class Superficie {

    constructor() {
    }

    getCuadrado(lado1:number) {
        return {
            tipo: "superficie",
            figura: "cuadrado",
            entrada: lado1,
            resultado: Math.pow(lado1, 2)
        }
    }

    getRectangulo(lado1:number, lado2:number) {
        return {
            tipo: "superficie",
            figura: "rectangulo",
            entrada: { 
                lado1,
                lado2
            },
            resultado: lado1*lado2
        }
    }

    getCirculo(radio:number) {
        return {
            tipo: "superficie",
            figura: "circulo",
            entrada: radio,
            resultado: (Math.pow(radio * Math.PI, 2)).toFixed(2)
        }
    }
}