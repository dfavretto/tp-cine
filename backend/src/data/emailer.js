const nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/**
 * 
 * @param {Reeserva} reserva 
 */
async function sendEmail(reserva) {
    try {
        if (typeof reserva !== Reserva) {
            throw new Error('Se debe usar un objeto de tipo Reserva para enviar por email.');
        }

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

        // // create reusable transporter object using the default SMTP transport
        // let transporter = nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     secure: false, // true for 465, false for other ports
        //     auth: {
        //         user: testAccount.user, // generated ethereal user
        //         pass: testAccount.pass // generated ethereal password
        //     }
        // });

        let mensaje = '';
        reservas.forEach((reserva, indice) => {
            mensaje += `Reserva N° ${indice}:\n ${JSON.stringify(reserva, null, 4)} \n`;
        });

        console.log('Enviando email con el transporter');
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Reservas 👻" <reservas@tp-cine.com>', // sender address
            to: `${reservas[0].email}`, // list of receivers
            subject: "Sus reservas", // Subject line
            text: `Aquí van las reservas`, // plain text body
            html: `<b>Reservas</b></br>${mensaje}` // html body
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

module.exports = sendEmail;
