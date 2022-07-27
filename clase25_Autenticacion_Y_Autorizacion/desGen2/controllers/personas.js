let personas = [];

const get = (req, res) => {
    res.render('pages/index.ejs', {personas});
};
    
const insert = (req, res) => {
    personas.push({...req.body});
    res.render('pages/index.ejs', {personas});
};

module.exports = {
    get, insert
}