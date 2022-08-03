let config = {};

config.twitter = {
    APIKEY : process.env.APIKEY,
    APISECRET : process.env.APISECRET,
    TOKEN : process.env.TOKEN
};

config.server = {
    port: process.env.PORT,
}

module.exports = {
    ...config
}