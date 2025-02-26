const express = require("express");
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express();
const port = process.env.PORT || 3030;
const template = require("./template");
const nodemailerSendgrid = require("nodemailer-sendgrid");

// const allowedOrigins = [
//     "https://blazeapp.co",
//     "https://blaze-landing.onrender.com",
//     "http://localhost:5173"
// ]

const apiKey = process.env.API_KEY

// const corsOptions = {
//     origin: allowedOrigins
// }

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require('dotenv').config();


const password = process.env.MAIL_PASSWORD
const from = process.env.MAIL_FROM_ADDRESS
const fromName = process.env.MAIL_FROM_NAME

// const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: Number(process.env.MAIL_PORT),
//     secure:false,
//     auth: {
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false
//     },
//     logger:true,
//     debug:true
// });

const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: `${password}`
    })
);


app.post("/api/send", async(req, res) => {
    const receiverName = req.body.name || "Customer"
    const receiverNameEmail = req.body.to || "goodnews.adewole9@gmail.com"
    const message = template(receiverName)

    const mailOptions = {
        from: from,
        to: receiverNameEmail,
        subject: "BlazeApp Waitlist",
        html:message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.status(500).send(error);
        }
        res.status(200).json("Email sent successfully");
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));