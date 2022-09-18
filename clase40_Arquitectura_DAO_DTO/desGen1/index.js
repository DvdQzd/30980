// Crear una clase DAO (Data Access Object) llamada PersonasDaoMem que permita almacenar, obtener en forma total y leer/modificar/borrar por id los datos de personas recibidas (nombre, apellido, dni) utilizando la memoria RAM del servidor.
// Debe proveer los métodos necesarios para interactuar con una estructura tipo array de objetos que contenga toda la información.
// Realizar las pruebas necesarias por código para comprobar el correcto funcionamiento.
// La nueva clase creada debe estar en un archivo separado cuyo nombre será similar al de su clase contenida.

const { PersonasDaoMem } = require("./PersonasDaoMem");

( () => {
    const PersonasMemDao = new PersonasDaoMem();
    
    console.log('1) Obtener todas las personas');
    console.log(PersonasMemDao.getall());
    console.log('-------------');


    console.log('2) Insertar una persona');
    const persona_1 = {
        nombre: 'Cosme',
        apellido: 'Fulanito',
        dni: '19023810381'
    };
    console.log(PersonasMemDao.insert(persona_1));
    console.log('-------------');

    console.log('3) Insertar una persona');
    const persona_2 = {
        nombre: 'chanchito',
        apellido: 'feliz',
        dni: '049384572'
    };
    console.log(PersonasMemDao.insert(persona_2));
    console.log('-------------');

    console.log('4) Obtener todas las personas');
    console.log(PersonasMemDao.getall());
    console.log('-------------');

    console.log('5) update id 2');
    const personaUpdate = {
        nombre: 'bob',
        apellido: 'esponja',
        dni: '923482934823'
    }
    console.log(PersonasMemDao.updateByid(2, personaUpdate));
    console.log('-------------');

    console.log('6) Obtener todas las personas');
    console.log(PersonasMemDao.getall());
    console.log('-------------');

    console.log('7) Borramos id 1');
    console.log(PersonasMemDao.deleteByid(1));
    console.log('-------------');

    console.log('8) Obtener todas las personas');
    console.log(PersonasMemDao.getall());
    console.log('-------------');
})();