const nodemailer = require('nodemailer');
const Reserva = require('../models/reserva').Reserva;
const Email = require('email-templates');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
/**
 * enviar email
 * @param {Reserva} reserva reserva a enviar por mail
 */
async function sendEmail(reserva) {
    try {
        // if (typeof reserva !== Reserva) {
        //     throw new Error('Se debe usar un objeto de tipo Reserva para enviar por email.');
        // }
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            }
        });


        // var transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     host: "smtp.gmail.com",
        //     auth: {
        //         user: "no.david.favretto",
        //         pass: "David66Favretto"
        //     }
        // });

        const email = new Email({
            message: {
                from: '"Reservas 👻" <no.david.favretto@gmail.com>'
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
                    to: 'ddaviddf@gmail.com'//reserva.email
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
