// Realizar un módulo Node.js llamado 'enviarmail', que cada vez que se lo ejecute envíe un correo electrónico hacia una cuenta Ethereal (https://ethereal.email/) creada para tal fin. 
// El asunto del mail y el mensaje a enviar se recibirán como parámetros por línea de comandos.
// Recordar que si los parámetros CLI contienen espacios, estos deberán están contenidos entre comillas "". El mensaje podrá tener formato HTML.
// Se representará por consola el resultado de la operación.
// Verificar en la cuenta de Ethereal que se haya recibido el mail con el asunto y contenido correspondiente.


const nodemailer = require('nodemailer');

const asunto = process.argv[2];
const mensaje = process.argv[3];

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'emmanuel.marquardt@ethereal.email',
        pass: 'mYTTv7T654ccczNGZ6'   
    }
});

const mailOptions = {
    from: 'emmanuel.marquardt@ethereal.email',
    to: 'emmanuel.marquardt@ethereal.email',
    subject: asunto,
    html: mensaje
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log("Error: ", err);
        return;
    }

    console.log(info);
});


// uso por terminal --> node index.js "Test" "<h1>Texto de prueba en un encabezado de titulo</h1>" 
