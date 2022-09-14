const router = require('express').Router();
const { getHtmlOnwire, 
        postHtmlOnWire,
        getDataOnwire,
        postDataOnWire,
        dataJson
    } = require('../controller/personas');


router.get('/html-onwire', getHtmlOnwire);
router.post('/html-onwire', postHtmlOnWire);


router.get('/data-onwire', getDataOnwire);
router.post('/data-onwire', postDataOnWire);
router.get('/data-json', dataJson);


module.exports = router;