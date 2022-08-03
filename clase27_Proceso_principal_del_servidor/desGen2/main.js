const yargs = require('yargs/yargs')(process.argv.slice(2));

const args = yargs.argv;

( () => {
    console.log({
        modo: args.m,
        puert: args.p,
        debug: args.d,
        otros: args._
    })
})();