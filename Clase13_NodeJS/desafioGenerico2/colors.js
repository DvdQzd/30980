"use strict";
// Realizar un proyecto TypeScript node.js que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola.
// La funcionalidad debe estar implementada dentro de una clase en un archivo color.ts y deberá utilizar sintaxis Typescript tipada. 
// El proyecto deberá convertir este código TS a JS5 en forma automática con TSC CLI
// npm i typescript
// ./node_modules/.bin/tsc --init --> crea el arhivo tsconfig.json que vamos a usar como modelo
var MAX = 255;
var Colors = /** @class */ (function () {
    function Colors() {
        var _this = this;
        this.color = "";
        this.getColor = function () { return (_this.color); };
        this.color = "color: (".concat(this.rndColor(), ", ").concat(this.rndColor(), ", ").concat(this.rndColor(), ")");
    }
    Colors.prototype.rndColor = function () {
        return Math.floor(MAX * Math.random());
    };
    return Colors;
}());
var miColor = new Colors();
console.log(miColor.getColor());
