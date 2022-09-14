const router = require('express').Router();
const {getHtmlOnwire, postHtmlOnWire} = require('../controller/personas');


router.get('/html-onwire', getHtmlOnwire);
router.post('/html-onwire', postHtmlOnWire);

module.exports = router;