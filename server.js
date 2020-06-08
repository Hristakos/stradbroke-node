const express = require("express");
const app = express();
const sendMail = require("./mail")
const port = 8080;
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.post("/email", (req, res) => {
    console.log("req.body ", req.body)
    const { email, subject, text } = req.body

    sendMail(email, subject, text, function (err, data) {
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