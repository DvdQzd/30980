// Realizar un proyecto en Node.js que acceda a una base de datos Firebase ya configurada.

// Agregar los colores red, green, blue dentro de una colección llamada ‘colores’ con el formato { nombre: color }
// Listar todos los colores disponibles.
// Modificar el color blue por navy.
// Borrar el color green

// A tener en cuenta:
// Implementar estas funciones utilizando Promises en las funciones de Firebase con sintaxis async/await, utilizando la importación en formato ES Modules (import)
// Verificar la información de la base de datos con la consola de Firebase.

var admin = require("firebase-admin");

var serviceAccount = require("./db/SECRETS_KEY.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


( async () => {

    try {
        
        const db = await admin.firestore();
        const query = db.collection('colores');

        // CREATE
        // let id = 1;
        // let doc = await query.doc(`${id}`);        
        // const response = await doc.create({color: 'Red'});
        // id++;
        // doc = await query.doc(`${id}`);        
        // await doc.create({color: 'Blue'});

        // id++;
        // doc = await query.doc(`${id}`);        
        // await doc.create({color: 'Green'});
        

        // READ
        // const querySnapshots = await query.get();
        // const response = querySnapshots.docs.map((doc) => {
        //     return { id: doc.id, ...doc.data() };
        // });
        // console.log(response);

        // UPDATE
        // const snapshotToUpdate = await query.where("color", "==", "Blue").get();
        // const idToUpdate = snapshotToUpdate.docs.map( (doc) => doc.id)[0];
        // await query.doc(idToUpdate).update({color: "navy"});
        
        // DELETE
        // const snapshotToDelete = await query.where("color", "==", "Green").get();
        // const idToDelete = snapshotToDelete.docs.map(doc => doc.id)[0];
        // await query.doc(idToDelete).delete();
    } catch (e) {
        console.log("Error: ", e);
    }
    
})();



