const pino = require('pino');


const log = pino({
    transport: {
        target: "pino-pretty",
        options: {
            ignore: "pid,hostname",
            // destination: "logs/errors.log"  --> asi para que escriba en archivo
        },
    }
})

module.exports = {
    log
}