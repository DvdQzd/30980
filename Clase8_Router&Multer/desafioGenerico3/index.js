// Crear un servidor que permita elegir y subir un archivo utilizando un formulario servido desde su espacio público.
// Dicho archivo se almacenará en una carpeta propia del servidor llamada 'uploads'.
// El nombre del archivo guardado se formará con el nombre original anteponiéndole un timestamp (Date.now()) seguido con un guión. Ej: 1610894554093-clase1.zip
// Utilizar express y multer en un proyecto de servidor que escuche en el puerto 8080.


const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        const filename = `${Date.now()} - ${file.originalname}`;
        cb(null, filename);
    }
});
const fileUpload = multer({storage});

app.post('/upload', fileUpload.single('archivo'), (req, res) => {
    const file = req.file;
    console.log("file: ", file);
    
    if(!file) {
        return res.status(400).send("Error subiendo el archivo");
    }

    res.status(200).send(`Archivo <b>${req}<b>subido correctamente`);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})