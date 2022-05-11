// FAKE API
const axios = require('axios');
const fetch = require('fetch');
const url = 'https://reqres.in/api/products/1';

(async () => {

    // axios.get(url);
    console.log(axios.get(url));

    fetch(url).then( res => {
        console.log(res);
    })
    // console.log(await axios.get(url));
})()