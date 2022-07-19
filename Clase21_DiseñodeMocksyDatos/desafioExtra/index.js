const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];


const faker = ( cant = 10) => {
    let arr = [];

    for (let i = 0; i < cant; i++) {
        arr.push({
            nombre: nombres[Math.round(Math.random() * (nombres.length - 1))],
            apellido: apellidos[Math.round(Math.random() * (apellidos.length - 1))],
            color: colores[Math.round(Math.random() * (colores.length - 1))]
        })      
    }

    return arr;
};

module.exports = {
    faker
}