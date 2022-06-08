const socket = io();

function sendCharacter(e) {
        console.log("Cosme");
        socket.emit("caracter", e.value);
}


document.getElementById("enviar").addEventListener("click", () => {
        const input = document.getElementById("mensajes"); 
        const frase = input.value;
        socket.emit("frases", frase);
        input.value = "";
});

socket.on("respuestas", frase => {
        console.log(frase)
        document.getElementById('caracteres').innerText = frase;
});

socket.on('mensajeria', mensajes => {
        console.log(mensajes);
        let texto = "";
        mensajes.forEach( el => {
                texto += `<br> Socket ${el.socketId} ---> ${el.mensaje}`;
        });

        document.getElementById("mensajeria").innerHTML = texto;
});