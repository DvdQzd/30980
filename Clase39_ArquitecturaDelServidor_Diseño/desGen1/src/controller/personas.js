const { agregarPersonas, obtenerPersonas} = require('../services/personas');

const getHtmlOnwire = (req, res) => {
    res.render('plantilla-html-onwire', {
        personas: obtenerPersonas()
    })
};

const postHtmlOnWire = (req, res) => {
    let persona = req.body;
    agregarPersonas(persona);
    res.redirect('/html-onwire');
}


module.exports = {
    getHtmlOnwire,
    postHtmlOnWire
}