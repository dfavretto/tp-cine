const nodemailer = require('nodemailer');
const Reserva = require('../models/reserva').Reserva;
const Email = require('email-templates');
/**
 * enviar email
 * @param {Reserva} reserva reserva a enviar por mail
 */
async function sendEmail(reserva) {
    try {
        // if (typeof reserva !== Reserva) {
        //     throw new Error('Se debe usar un objeto de tipo Reserva para enviar por email.');
        // }

        var transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "no.david.favretto",
                pass: "David66Favretto"
            }
        });

        const email = new Email({
            message: {
                from: '"Reservas 👻" <reservas@tp-cine.com>'
            },
            // uncomment below to send emails in development/test env:
            // send: true
            transport: transporter
        });

        // let mensaje = '';
        // reservas.forEach((reserva, indice) => {
        //     mensaje += `Reserva N° ${indice}:\n ${JSON.stringify(reserva, null, 4)} \n`;
        // });

        email
            .send({
                template: '../src/data/emails/plantillas',
                message: {
                    to: reserva.email
                }/*,
                locals: {
                    name: 'Elon'
                }*/
            })
            .then(console.log)
            .catch(console.error);

        /*let info = await transporter.sendMail({
            from: '"Reservas 👻" <reservas@tp-cine.com>',
            to: `${reservas[0].email}`,
            subject: "Sus reservas",
            //text: `Aquí van las reservas`,
            html: `<b>Hello world?</b>\n${mensaje}` // html body
        });*/

        //console.log("Message sent: %s", info.messageId);

        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (err) {
        console.log(err);
    }
}

module.exports = {sendEmail};
