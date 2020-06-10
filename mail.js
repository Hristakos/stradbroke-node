const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const mailGunApi = process.env.MAILGUN_API_KEY;
const mailGunDomain = process.env.MAILGUN_DOMAIN;
const hbs = require('nodemailer-express-handlebars');

const auth = {
    auth: {
        api_key: mailGunApi,
        domain: mailGunDomain
    }
}

let transporter = nodemailer.createTransport(mailGun(auth));

// transporter.use('compile', hbs({
//     viewEngine: {
//         extName: '.hbs',
//         partialsDir: 'views/partials',
//         layoutsDir: 'views/layout',
//         defaultLayout: 'order',
//     },
//     viewPath: 'views/'
// }));
sendMail = (email, subject, text, cb) => {
    console.log(email, subject, text)
    const mailOptions = {
        from: email,
        // to: 'paul@stradbrokeprinting.com.au',
        to: 'peter.hristakos@bigpond.com',
        subject,
        text//,
        //template: 'order'
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("err = " + err)
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}


module.exports = sendMail;