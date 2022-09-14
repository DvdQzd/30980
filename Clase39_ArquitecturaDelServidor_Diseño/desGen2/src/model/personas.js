let personas = [];

const insertarPersona = persona => {
    console.log(personas);
    return personas.push(persona);
};

const leerPersonas = () => {
    console.log(personas);
    return personas;
}

module.exports = {
    insertarPersona,
    leerPersonas
}