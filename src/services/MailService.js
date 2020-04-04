const nodemailer = require("nodemailer");
let conf = require("../../config");

module.exports = () => {
    const email = nodemailer.createTransport({
        host: conf.host,
        port: conf.port,
        secure: conf.ssl,
        auth: {
            user: conf.user,
            pass: conf.pass
        }
    });
    return {
        sendIP: IP => {
            email.sendMail({
                from: conf.user,
                to: conf.to,
                subject: conf.subject,
                html: conf.body.replace("#IP#", IP)
            }, (err) => {
                if (err)
                    console.log(err);
            })
        }
    };
}
