const router = require('express').Router();
const { getHora } = require('../controller/personas');


router.get('/datos', getHora);

module.exports = router;