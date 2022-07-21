
const root = (req, res) => {
    const nombre = req.query.nombre || '';
    console.log(req.session);
    if(req.session.contador) {
        req.session.contador++;
        res.status(200).send(`${nombre} : Usted ha visitado la pagina: ${req.session.contador} veces`);
    } else {
        req.session.contador = 1;
        res.status(200).send(`${nombre} : Te damos la bienvenida`);
    }
};

const olvidar = (req, res) => {
    try {
        req.session.destroy();
        res.status(200).send("Hasta luego!");
    } catch (error) {
        res.status(500).send("Err: ", err);
    }
}

module.exports = {
    root,
    olvidar
}