const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const mailGunApi = process.env.MAILGUN_API_KEY;
const mailGunDomain = process.env.MAILGUN_DOMAIN;
const auth = {
    auth: {
        api_key: mailGunApi,
        domain: mailGunDomain
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

sendMail = (email, subject, text, cb) => {
    console.log(email, subject, text)
    const mailOptions = {
        from: email,
        to: 'peter.hristakos@bigpond.com',
        subject,
        text
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}


module.exports = sendMail;