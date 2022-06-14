// Realizar un programa que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola. Este estará implementado en un archivo llamado color.js 
// La funcionalidad debe estar implementada dentro de una clase y deberá utilizar sintaxis ES6 (const, let, arrow function y template string).
// Convertir este código ES6 a JS5 con Babel online. Realizar esta conversión en forma automática dentro de un proyecto node.js que utilice Babel CLI

// "build": "babel ./origen.js -o ./destino.js -w"

const MAX = 255;

class Color {

    constructor() {
        this.color = `color: (${this.rndColor()}, ${this.rndColor()}, ${this.rndColor()})`;
    }

    rndColor() {
        return Math.floor( MAX * Math.random());
    }

    getColor = () => {
        return this.color;
    }
}


const miColor = new Color();
console.log(miColor.getColor());