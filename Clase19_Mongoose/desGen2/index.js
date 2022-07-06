// Desarrollar un proyecto en Node.js que realice la lectura de los estudiantes de la base colegio (creada anteriormente) mostrándolos en consola, cumpliendo con los siguientes puntos:
// 1) Los estudiantes ordenados por orden alfabético según sus nombres.
// 2) El estudiante más joven.
// 3) Los estudiantes que pertenezcan al curso '2A'.
// 4) El segundo estudiante más joven.
// 5) Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
// 6) Los estudiantes que sacaron 10.
// 7) El promedio de notas del total de alumnos.
// 8) El promedio de notas del curso '1A'.
// Los resultados se deben imprimir en orden según los puntos citados (Promesas anidadas con .then)


const mongoose = require('mongoose');
const { estudiantes } = require('./models/estudiantes');
( async () => {
    try {
        
        const CS = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(CS);

        // const response = await estudiantes.find();
        // console.log(response);

        // 1)
        // console.log("Ejercicio 1: ");
        // const response = await estudiantes.find().sort({nombre: 1});
        // console.log(response);

        // 2)
        // console.log("Ejercicio 2: ");
        // const response = await estudiantes.find().sort({edad: 1}).limit(1);
        // console.log(response);

        // 3)
        // console.log("Ejercicio 3: ");
        // const response = await estudiantes.find({curso: '2A'});
        // console.log(response);

        // 4)
        // console.log("Ejercicio 4: ");
        // const response = await estudiantes.find().sort({edad: 1}).skip(1).limit(1);
        // console.log(response);

        // 5)
        // console.log("Ejercicio 5: ");
        // const response = await estudiantes.find().select(["nombre", "apellido", "-_id"]).sort({apellido: -1});
        // console.log(response);

        // 6)
        // console.log("Ejercicio 6: ");
        // const response = await estudiantes.find({nota: 10});
        // console.log(response);

        // 7)
        console.log("Ejercicio 7: ");
        // MUY MALA PRACTICA, ES POCO OPTIMO
        // const response = await estudiantes.find().select(["nota", "-_id"]);
        // const suma = response.reduce( (sum, value) => sum + value.nota, 0);
        // console.log("Promedio: ", suma / response.length);

        // ES LA QUE VA!:
        // const response = await estudiantes.aggregate([
        //      {
                    // $group: {
                    // _id: null,
                    // promedio: { $avg: "$nota"}
        //     }
        // }]);

        // console.log(response[0].promedio);

        // 8)
        console.log("Ejercicio 8: ");
        const response = await estudiantes.aggregate([
        {
            $match: { curso: "1A"}
        },
        {   
            $group: {
                _id: null,
                promedio: { $avg: "$nota"},
        }
        }]);

        console.log("Promedio curso 1A: ", response);

    } catch (e) {
        console.log("Rompido!: ", e);
    }
})();