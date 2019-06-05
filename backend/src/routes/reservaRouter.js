const express = require('express')
const _ = require('lodash')
const nodemailer = require('nodemailer');
const Joi = require('@hapi/joi')
const daoFactory = require('../data/daoFactory')

const router = express.Router()

const baseURI = '/api/reserva'

router.get('/', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    if (_.isEmpty(req.query)) {
        _handleGetAll(req, res);
    } else {
        _handleGetWithQS(req, res);
    }
});

async function _handleGetAll(req, res) {
    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getAll();
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

router.get('/reenviar', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    if (_.isEmpty(req.query)) {
        _handleReenviar(req, res);
    } else {
        console.log('Reenviar con query no implementado aun');
    }
});

async function _handleReenviar(req, res) {
    try {
        const reservaDAO = daoFactory.getReservasDAO();
        const result = await reservaDAO.getAll();
        await sendEmail(result);
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

async function sendEmail(reservas) {
    try {

        console.log('Creando cuenta de email');
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        console.log('Creando transporter');
        var transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "no.david.favretto",
                pass: "David66Favretto"
            }
        });

        console.log('Enviando email con el transporter');
        let mensaje = '';
        reservas.forEach((reserva, indice) => {
            mensaje += `Reserva N° ${indice}:\n ${JSON.stringify(reserva, null, 4)} \n`;
        })

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Reservas 👻" <reservas@tp-cine.com>', // sender address
            to: "ddaviddf@gmail.com, jeremias.hsn@gmail.com", // list of receivers
            subject: "Sus reservas", // Subject line
            text: `Aquí van las reservas`, // plain text body
            html: `<b>Reservas</b>\n${mensaje}` // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (err) {
        console.log(err);
    }
}

module.exports = router