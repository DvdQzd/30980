const log4js = require('log4js');


log4js.configure({
    appenders: {
        loggerDev: {type: "console"},
        loggerProd: {type: "file", filename: "logs/errors.log"}
    },
    categories: {
        default: { appenders: ["loggerDev"], level: "all"},
        prod: {appenders: ["loggerProd"], level: "error"},
        qa: {appenders: ["loggerDev"], level: "trace"}
    }
});


let log;

if( process.env.NODE_ENV === 'PROD') {
    log = require('log4js').getLogger('prod');
} else {
    log = require('log4js').getLogger();
}


module.exports = {
    log
}