
const suma = (a, b) => parseInt(a) + parseInt(b);
const resta = (a, b) => parseInt(a) - parseInt(b);
const multiplicacion = (a, b) => parseInt(a) * parseInt(b);
const division = (a, b) => parseInt(a) / parseInt(b);

const mostrar = mensaje => console.log(mensaje);

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    mostrar
}
