let personas = [];

const get = (req, res) => {
    res.render('pages/index.ejs', {personas});
};
    
const insert = (req, res) => {
    personas.push({...req.body});
    res.render('pages/index.ejs', {personas});
};

const home = (req, res) => {
    const {name} = req.body;
    req.session.nombre = name;
    res.redirect('/');
}

const destroy = (req, res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Err: ", err);
    }
}

module.exports = {
    get, insert, home, destroy
}