const { faker } = require('@faker-js/faker');

faker.locale = 'es';

const get = () => ({
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    color: faker.color.human()
});


module.exports = {
    get
}