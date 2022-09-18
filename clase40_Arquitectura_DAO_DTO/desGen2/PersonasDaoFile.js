const { personaDTO } = require('./PersonasDTO');
const fs = require('fs');

class PersonasDaoFile {
    constructor() {
        this.archivo = null;
    }

    init = async (fileName) => {
        this.archivo = fileName;
        try {
            await fs.readFileSync(this.archivo, 'utf-8');
        } catch (e) {
            await fs.writeFileSync(this.archivo, JSON.stringify([]));
        }
    }

    getall = async () => {
        if(!this.archivo) return "Debe llamar al metodo init primero!";

        try {
            return JSON.parse(await fs.readFileSync(this.archivo, 'utf-8'));
        } catch (e) {
            console.log("error: ", e);
        }
    };

    getById = async (id) => {
        if(!this.archivo) return "Debe llamar al metodo init primero!";

        let personas = await this.getall();
        let indice = this.getIndex(id, personas);
        return personas[indice];
    };

    insert = async (datoS) => {
        if(!this.archivo) return "Debe llamar al metodo init primero!";

        try {
            let personas = await this.getall();
            let nuevaPersona = personaDTO(this.getNextId(personas), this.getFyH(), datoS);
            personas.push(nuevaPersona);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return nuevaPersona;
        } catch (e) {
            console.log("Error: ", e);
        }

    }

    updateByid = async (id, datoS) => {
        if(!this.archivo) return "Debe llamar al metodo init primero!";

        try {
            let personas = await this.getall();
            let personaUpdate = personaDTO(id, this.getFyH(), datoS);
            personas.splice(this.getIndex(id, personas), 1, personaUpdate);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return personaUpdate;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    deleteByid = async (id) => {
        if(!this.archivo) return "Debe llamar al metodo init primero!";

        try {
            let personas = await this.getall();
            personas.splice(this.getIndex(id, personas), 1);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return "Borrado";
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    getNextId = (persona) => (persona.length > 0 ? persona.length + 1 : 1);
    
    getIndex = (id, persona) => (persona.findIndex( persona => persona.id === id));

    getFyH = () => (new Date().toLocaleDateString());
}

module.exports = {
    PersonasDaoFile
}