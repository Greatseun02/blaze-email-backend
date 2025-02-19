const express = require("express");
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express();
const port = process.env.PORT || 3030;
const template = require("./template");

const allowedOrigins = [
    "https://blazeapp.co",
    "https://blaze-landing.onrender.com",
    "http:localhost:5173"
]

const corsOptions = {
    origin: allowedOrigins
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require('dotenv').config();

// const transporter = nodemailer.createTransport({
//     service: "Gmail", 
//     auth: {
//     user: "mygmail@gmail.com",
//     pass: "password"
//     }
// });

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});


app.post("/api/send", (req, res) => {
    const message = template(req.body.name)
    const mailOptions = {
        from: "hello@demomailtrap.com",
        to: req.body.to,
        subject: req.body.subject,
        html: message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.status(500).send(error);
        }
        res.status(200).json("Email sent successfully");
    });
});


app.listen(port, () => console.log(`Server running on port ${port}`));

