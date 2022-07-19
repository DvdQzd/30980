const { faker } = require('./index');
const { expect } = require('chai');


describe('index.js test suit', () => {

    it('response must be an array', () => {
        const result = faker();
        // console.log(result);
        expect(result[0]).to.be.an("Object");
    });

    it('response must be an Array and length of 10 elements', () => {
        const result = faker();
        expect(result[0]).to.be.an("Object");
        expect(result).to.have.lengthOf(10);
    });

    it('test must be an Array and length of 5 elements', () => {
        const result = faker(5);
        expect(result).to.have.lengthOf(5);
    });


    // personas = { nombre, apellido, color}
    it('response must contain jsons of Personas', () => {
        const result = faker();
        expect(result[0]).to.deep.property('nombre');
        expect(result[0]).to.deep.property('apellido');
        expect(result[0]).to.deep.property('color');
    });
});

// describe('productos.js test suit', () => {
//     it('productos must be an array', () => {

//     });

//     it('response must be an array', () => {

//     });


//     it('response must be an array', () => {

//     });
// })