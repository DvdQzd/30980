// Realizar un proyecto TypeScript node.js que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola.
// La funcionalidad debe estar implementada dentro de una clase en un archivo color.ts y deberá utilizar sintaxis Typescript tipada. 
// El proyecto deberá convertir este código TS a JS5 en forma automática con TSC CLI

// npm i typescript
// ./node_modules/.bin/tsc --init --> crea el arhivo tsconfig.json que vamos a usar como modelo

class Colors {
    private color:string = "";

    constructor() {
        this.color = `color: (${this.rndColor()}, ${this.rndColor()}, ${this.rndColor()})`;
    }

    private rndColor():number {
        return Math.floor(255 * Math.random());
    }

    getColor = () =>( this.color )
}

module.exports = {
    Colors
}