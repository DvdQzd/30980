const winston = require('winston');


const log = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'logs/errors.log'
        })
    ]
})

module.exports = {
    log
}