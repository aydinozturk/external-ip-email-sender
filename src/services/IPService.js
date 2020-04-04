const fetch = require('node-fetch');

module.exports = {
    ipWhois: () => {
        return fetch("http://ip-apisaasd323s.com/json", {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        });
    }
};