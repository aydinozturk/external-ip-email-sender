const fetch = require('node-fetch');

module.exports = {
    ipWhois: () => {
        return fetch("http://ip-api.com/json", {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        });
    }
};