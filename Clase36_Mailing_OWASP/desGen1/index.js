// Realizar en Node.js un programa llamado 'enviarWapp' que permita enviar mensajes de texto a la red social Whatsapp.
// Configurar en la cuenta en Twilio la operación de Whatsapp SandBox (https://www.twilio.com/console/sms/whatsapp/sandbox/) habilitando a través de este servicio, el número telefónico del Whatsapp en el que se quieren recibir los mensajes.
// El número telefónico destino y el mensaje a enviar se le pasarán a la aplicación por línea de línea de comandos.
// Verificar que el mensaje de Whatsapp llegue al número indicado y que la operación se refleje en la consola de Twilio.
// NOTA: Twilio brinda un número gratis para el envío de Whatsapp que viene con un monto en USD. Cada vez que enviemos un mensaje, se descontará el costo de la operación de dicho monto.


const sId = 'AC31d9233f4cb713b143c8a7b7cb077e4d';
const authToken = '3f850418f6266a5421945078161c1f42';

const client = require('twilio')(sId, authToken);
const numero = process.argv[2];
const text = process.argv[3];
const option = process.argv[4];
const urlArchivo = process.argv[5] || null;

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
        to: `whatsapp:+549${numero}`,
        mediaUrl: [urlArchivo]
    }).then( message => {
        console.log(message.accountSid);
    }).catch( err => {
        console.log("Error: ", err);
    })
} else {
    console.log("opcion no valida");
}

// node index.js "numeroDeWhatsapp" "mi vieja mula" wapp "https://upload.wikimedia.org/wikipedia/commons/4/4b/What_Is_URL.jpg"
// node index.js "numeroDeWhatsapp" "mi vieja mula" wapp https://demo.twilio.com/owl.png"


// Link a la consola de twillio -->  // https://console.twilio.com/us1/monitor/logs/sms?frameUrl=%2Fconsole%2Fsms%2Flogs%3Fx-target-region%3Dus1&currentFrameUrl=%2Fconsole%2Fsms%2Flogs%3F__override_layout__%3Dembed%26bifrost%3Dtrue%26x-target-region%3Dus1
