// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'. 
// De 20 a 5 hs será 'Buenas noches!'.
// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.


const http = require('http');
const PORT = 8080;

const server = http.createServer( (req, res) => {

    console.log(req);
    const date = (new Date).getHours();
    console.log(date)
    if( date > 6 && date < 12) {
        return res.end("Buenos dias!");
    }
    
    if( date > 13 && date < 19) {
        return res.end("Buenos tardes!");
    }

    if( date > 19 || date < 5) {
        console.log("asdasdas ")
        return res.end("Buenos noches!");
    }

    return res.end("Mensaje por defecto")
    // res.end('Hola: ');
});


server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})