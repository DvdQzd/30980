const { agregarPersonas, obtenerPersonas} = require('../services/personas');
const path = require('path');


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

const getDataOnwire = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/plantilla.html'))
}

const postDataOnWire = (req, res) => {
    let persona = req.body;
    agregarPersonas(persona);
    res.redirect('/html-onwire');
}

const dataJson = (req, res) => {
    res.json({personas: obtenerPersonas()})
}
module.exports = {
    getHtmlOnwire,
    postHtmlOnWire,
    getDataOnwire,
    postDataOnWire,
    dataJson
}