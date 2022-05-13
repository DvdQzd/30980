// FAKE API
const axios = require('axios');

const url = 'https://reqres.in/api/products/1';

(async () => {
        console.log(await axios.get(url));
})()