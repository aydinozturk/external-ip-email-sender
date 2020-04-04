const MailService = require("./services/MailService");
const IPService = require("./services/IPService");

module.exports = () => {
    let IPAddress = "";
    setInterval(function () {
        IPService.ipWhois().then(data => data.json()).then(data => {
            if (IPAddress !== data.query) {
                IPAddress = data.query;
                MailService().sendIP(data.query);
            }
        }).catch(err => console.log(err));
    }, 60000);
}