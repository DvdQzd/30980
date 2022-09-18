// Crear en base al desafío anterior, otro DAO llamado PersonasDaoFile que contenga los mismos métodos para interactuar con los datos de una persona, pero esta vez persistida en el file system (fs). Para asegurar el correcto funcionamiento del contenedor, agregar un método init que verifique que el archivo existe y sino que lo cree. Para mantener la consistencia entre las interfaces de ambos DAOs, agregar también este nuevo método al DAO de memoria. 

// En ambas clases (mem y file) en lugar de devolver objetos anónimos de javascript, instanciar y devolver objetos de la clase PersonaDto. Crear esta clase con los mismos campos que los almacenados para cada persona (ni uno más, ni uno menos). Las nuevas clases creadas deben estar en un archivo separado cuyo nombre será similar al de su clase contenida.

const { PersonasDaoFile } = require("./PersonasDaoFile");

( async () => {
    const PersonasFileDao = new PersonasDaoFile();
    
    console.log('Obtener todas las personas DEBE FALLAR');
    console.log(await PersonasFileDao.getall());
    console.log('-------------');

    await PersonasFileDao.init('personas.json');

    console.log('1) Obtener todas las personas');
    console.log(await PersonasFileDao.getall());
    console.log('-------------');

    console.log('2) Insertar una persona');
    const persona_1 = {
        nombre: 'Cosme',
        apellido: 'Fulanito',
        dni: '19023810381'
    };
    console.log(await PersonasFileDao.insert(persona_1));
    console.log('-------------');

    console.log('3) Insertar una persona');
    const persona_2 = {
        nombre: 'chanchito',
        apellido: 'feliz',
        dni: '049384572'
    };
    console.log(await PersonasFileDao.insert(persona_2));
    console.log('-------------');

    console.log('4) Obtener todas las personas');
    console.log(await PersonasFileDao.getall());
    console.log('-------------');

    console.log('5) update id 2');
    const personaUpdate = {
        nombre: 'bob',
        apellido: 'esponja',
        dni: '923482934823'
    }
    console.log(await PersonasFileDao.updateByid(2, personaUpdate));
    console.log('-------------');

    console.log('6) Obtener todas las personas');
    console.log(await PersonasFileDao.getall());
    console.log('-------------');

    console.log('7) Borramos id 1');
    console.log(await PersonasFileDao.deleteByid(1));
    console.log('-------------');

    console.log('8) Obtener todas las personas');
    console.log(await PersonasFileDao.getall());
    console.log('-------------');
})();