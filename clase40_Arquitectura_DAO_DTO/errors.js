
const showErrors1 = () => {
    console.log("Cosme fulanito a");
    console.log("Cosme fulanito 1 b");
    console.log("mensaje de error 1 c");
}

const showErrors2 = () => {
    console.log("mensaje de error 2 a");
    console.log("mensaje de error 2 b");
    console.log("mensaje de error 2 c");
}

const showErrors3 = () => {
    console.log("mensaje de error 3 a");
    console.log("mensaje de error 3 b");
    console.log("mensaje de error 3 c");
}

const errors = {
    "error_1": showErrors1,
    "error_2": showErrors2,
    "error_3": showErrors3,
}

module.exports = {
    errors
}