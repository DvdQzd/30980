// Desarrollar un motor de plantillas custom para un servidor basado en express, que permita representar en la ruta '/cte1' el siguiente archivo de plantilla 'plantilla1.cte':

const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs').promises;
app.use(express.static('public'));

app.engine('cte', async (filePath, options, callback) => {

    try {
        const file = await fs.readFile(filePath);
        const rendered = file.toString()
                .replace('^^titulo$$', options.titulo)
                .replace('^^mensaje$$', options.mensaje)
                .replace('^^autor$$', options.autor)
                .replace('^^version$$', options.version);
        
        return callback(null, rendered);
    } catch(err){
        return callback(new Error(err));
    }
});

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res) => {
    const datos = {
        titulo: 'Alto titulo',
        mensaje: 'Alto mensaje',
        autor: 'Signed by Cosme Fulanito',
        version: '1.2.1'
    };
    
    res.render('index', datos);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});