
const setCookie = ( req, res) => {
    let { nombre, valor} = req.query;
    let tiempo = parseInt(req.query.tiempo) || false;
    console.log(req.query);

    if(nombre, valor) {
        if(tiempo) {
            res.cookie(nombre, valor, {maxAge: tiempo}).send(`Cookie creada por ${tiempo} segundos`);
        } else {
            res.cookie(nombre, valor).send("Cookie creadas");
        }
    } else {
        res.status(400).send("faltan valores a enviar");
    }
};

const getCookie = (req, res) => {
    const cookie = req.cookies;
    console.log(cookie);
    res.status(200).json({cookie});
};

const clearCookie = (req, res) => {
    const { nombre } = req.query;
    res.clearCookie(nombre).send(`Cookie ${nombre} eliminada`);
};

module.exports = {
    setCookie,
    getCookie,
    clearCookie
}