const { PersonasDaoFile } = require("./PersonasDaoFile");
const { PersonasDaoMem } = require("./PersonasDaoMem");

class personasFactory {

    createPersona(data) {
        if(data.type === "mem") return new PersonasDaoMem();
        if(data.type === "File") return new PersonasDaoFile(); 
    }
}

module.exports = {
    personasFactory
}