import nodemailer from 'nodemailer'
import EnvData from '../config/EnvData.js';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: EnvData.Email_User,
        pass: EnvData.Email_Pass,
    },
});

export const sendEmail = async ({ email, subject, msg }) => {
    try {
        const info = await transporter.sendMail({
            from: '"Shree Kumar" <shreekumarverma9@gmail.com>',
            to: email,
            subject: subject,
            html: msg
        })
        console.log("Message sent: " + info.messageId)
    } catch (error) {
        console.log(error)
    }
}