const { get } = require('../models/users');


const getUserInfo = (req, res) => {
    if(req.isAuthenticated()){
        console.log(req.session);
        const { user } = req.session.passport;
        const result = get(user);
        res.render('pages/indexUsers', {info: result});
    } else {
        res.status(401).send("get out");
    }
}

module.exports = {
    getUserInfo
}