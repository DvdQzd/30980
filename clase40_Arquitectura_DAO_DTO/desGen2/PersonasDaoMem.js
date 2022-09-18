const { personaDTO } = require('./PersonasDTO');


class PersonasDaoMem {
    constructor() {
        this.persona = [];
    }

    getNextId = () => (this.persona.length > 0 ? this.persona.length + 1 : 1);
    
    getIndex = (id) => (this.persona.findIndex( persona => persona.id === id));

    getall = () => (this.persona);

    getById = (id) => (this.persona[this.getIndex(id)]);

    insert = (datoS) => {
        let nuevaPersona = personaDTO(this.getNextId(), this.getFyH(), datoS);
        this.persona.push(nuevaPersona);
        return nuevaPersona;
    }

    updateByid = (id, datoS) => {
        let personaUpdate = personaDTO(id, this.getFyH(), datoS);
        this.persona.splice(this.getIndex(id), 1, personaUpdate);
        return personaUpdate;
    }

    deleteByid = (id) => {
        this.persona.splice(this.getIndex(id), 1);
        return "Borrado";
    }
    getFyH = () => (new Date().toLocaleDateString());
}

module.exports = {
    PersonasDaoMem
}