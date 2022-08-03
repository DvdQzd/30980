const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

( () => {
    console.log( {
        modo: args.m,
        puerto: args.p,
        debug: args.d,
        otros: args._
    });
})();