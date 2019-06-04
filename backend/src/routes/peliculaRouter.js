const express = require('express');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const Joi = require('@hapi/joi');
const daoFactory = require('../data/daoFactory');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// const emailer = require('../data/emailer');

// const estudiantesDAO = require('../data/estudiantesDAO_Arr')
// const estudiantesDAO = require('../data/estudiantesDAO_DB')

const router = express.Router();

const baseURI = '/api/pelicula';

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
        const peliculaDAO = daoFactory.getPeliculasDAO();
        const result = await peliculaDAO.getAll();
        console.log('Enviando email');
        await sendEmail('Este es un email de prueba');
        console.log('Email enviado');
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

async function _handleGetWithQS(req, res) {
    try {
        // if (isNaN(req.query.edadMin) || isNaN(req.query.edadMax))
        //     throw { status: 400, descripcion: 'las edades provistas no son numéricas' }

        // if (req.query.edadMin < 0 || req.query.edadMax < 0)
        //     throw { status: 400, descripcion: 'las edades provistas no son positivas' }

        // const estudiantesDAO = daoFactory.getPeliculasDAO()
        // const result = await estudiantesDAO.getByAge(req.query.edadMin, req.query.edadMax)
        // res.json(result)

        const peliculaDAO = daoFactory.getPeliculasDAO();
        const result = await peliculaDAO.getByTitulo(req.query.titulo);
        res.json(result);
    } catch (err) {
        res.status(err.status).json(err);
    }
}

router.get('/:titulo', async (req, res) => {
    console.log(`GETTING: ${baseURI}${req.url}`);

    try {
        // if (isNaN(req.params.dni))
        //     throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' }

        // const estudiantesDAO = daoFactory.getPeliculasDAO()
        // const resultado = await estudiantesDAO.getByDni(req.params.dni)

        const peliculaDAO = daoFactory.getPeliculasDAO();
        const resultado = await peliculaDAO.getByTitulo(req.params.titulo);

        if (!resultado) {
            throw { status: 404, descripcion: 'pelicula no encontrada' };
        }

        res.json(resultado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log(`POSTING: ${baseURI}${req.url}`)

    try {
        const nuevo = req.body

        if (esEstudianteInvalido(nuevo))
            throw { status: 400, descripcion: 'el estudiante posee un formato json invalido o faltan datos' }

        const estudiantesDAO = daoFactory.getPeliculasDAO()
        const estuCreado = await estudiantesDAO.add(nuevo)
        res.status(201).json(estuCreado)
    } catch (err) {
        res.status(err.status).json(err)
    }
});

router.delete('/:dni', async (req, res) => {
    console.log(`DELETING: ${baseURI}${req.url}`);

    try {
        if (isNaN(req.params.dni)) {
            throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' };
        }

        const estudiantesDAO = daoFactory.getPeliculasDAO();
        await estudiantesDAO.deleteByDni(req.params.dni);
        res.status(204).send();
    } catch (err) {
        res.status(err.status).json(err);
    }
});

router.put('/:dni', async (req, res) => {
    console.log(`REPLACING: ${baseURI}${req.url}`);

    try {
        if (isNaN(req.params.dni)) {
            throw { status: 400, descripcion: 'el dni provisto no es un número o es inválido' };
        }

        const nuevo = req.body;

        if (esEstudianteInvalido(nuevo)) {
            throw { status: 400, descripcion: 'el estudiante posee un formato json invalido o faltan datos' };
        }

        if (req.params.dni != nuevo.dni) {
            throw { status: 400, descripcion: 'el dni provisto no coincide entre el recurso buscado y el nuevo' };
        }

        const estudiantesDAO = daoFactory.getPeliculasDAO();
        const estuActualizado = await estudiantesDAO.updateByDni(req.params.dni, nuevo);
        res.json(estuActualizado);
    } catch (err) {
        res.status(err.status).json(err);
    }
});

function esEstudianteInvalido(estudiante) {
    const schema = {
        nombre: Joi.string().alphanum().min(1).required(),
        apellido: Joi.string().alphanum().min(1).required(),
        edad: Joi.number().integer().min(0).max(120).required(),
        dni: Joi.number().integer().min(1).max(99999999).required()
    };
    const { error } = Joi.validate(estudiante, schema);
    return error;
}

async function sendEmail(mensaje) {
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

        console.log('Enviando email con el transporter');
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "ddaviddf@gmail.com, jeremias.hsn@gmail.com", // list of receivers
            subject: "Hello", // Subject line
            text: `Hello world?\n${mensaje}`, // plain text body
            html: `<b>Hello world?</b>\n${mensaje}` // html body
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

module.exports = router;
