// Al ejercicio anterior agregarle un tercer parámetro que indique la cuenta email destino, y un cuarto parámetro opcional, que permita en caso de pasarlo, adjuntar un archivo local (mediante path) al email enviado.
// Se utilizará Gmail como servidor de correo por parte de nodemailer.
// Enviar un email sin adjunto y otro con una imágen.
// Comprobar en ambos casos que los correos lleguen a la cuenta indicada y la información corresponda.


const nodemailer = require('nodemailer');

const asunto = process.argv[2];
const mensaje = process.argv[3];
const to = process.argv[4];
const attach = process.argv[5];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cosmesfulanitocoderhouse@gmail.com',
        pass: 'coderhouse',
    }
});

const mailOptions = {
    from: 'emmanuel.marquardt@ethereal.email',
    to: to || 'cosmesfulanitocoderhouse@gmail.com',
    subject: asunto,
    html: mensaje,
    attach: [{
        path: 'chip.jpg',
    }]
};

console.log(mailOptions);

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log("Error: ", err);
        return;
    }

    console.log(info);
})