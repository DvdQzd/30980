// Realizar en Node.js un programa llamado 'enviarSMS' que permita enviar mensajes de texto.
// Crear a tal fin, una cuenta en Twilio (https://www.twilio.com/) habilitando un número telefónico gratis para la operación.
// El número telefónico destino y el mensaje a enviar se le pasarán a la aplicación por línea de línea de comandos.
// Verificar que el mensaje SMS llegue al número indicado y que la operación se refleje en la consola de Twilio.

const sId = 'AC31d9233f4cb713b143c8a7b7cb077e4d';
const authToken = '3f850418f6266a5421945078161c1f42';

const client = require('twilio')(sId, authToken);
const numero = process.argv[2];
const text = process.argv[3];
const option = process.argv[4];

if( option === 'sms' ) {
    client.messages.create({
        body: text,
        from: '18508012963',
        to: `+54${numero}`
    }).then( message => {
        console.log(message.accountSid);
    }).catch( err => {
        console.log("Error: ", err);
    })
} else if( option === 'wapp') {
    client.messages.create({
        body: text,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+549${numero}`
    }).then( message => {
        console.log(message.accountSid);
    }).catch( err => {
        console.log("Error: ", err);
    })
} else {
    console.log("opcion no valida");
}