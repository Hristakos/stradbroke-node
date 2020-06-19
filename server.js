const express = require("express");
const app = express();
const sendMail = require("./mail")
const port = 8080;
const cors = require("cors");
var bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const orderTemplate = require("./orderTemplate");
const contactTemplate = require("./contactTemplate")

app.use(bodyParser());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.post("/order", (req, res) => {
    console.log("req.body ", req.body)
    const { email,
        subject,
        text,
        company,
        name,
        phone,
        product,
        quantity,
        message
    } = req.body
    const template = Handlebars.compile(orderTemplate);
    const orderRequest = template({
        name,
        company,
        phone,
        product,
        quantity,
        message
    });
    sendMail(email, subject, text, orderRequest, function (err, data) {
        if (err) {
            res.status(500).json({ message: "Internal Server Error" })
        } else {
            res.json({ message: "Email sent" })
        }
    })
})

app.post("/contact", (req, res) => {
    console.log("req.body ", req.body)
    const { email,
        subject,
        text,
        name,
        phone,
        message
    } = req.body
    const template = Handlebars.compile(contactTemplate);
    const contactRequest = template({
        name,
        phone,
        message
    });
    sendMail(email, subject, text, contactRequest, function (err, data) {
        if (err) {
            res.status(500).json({ message: "Internal Server Error" })
        } else {
            res.json({ message: "Email sent" })
        }
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})