const express = require('express')
const _ = require('lodash')
const Joi = require('@hapi/joi')
const daoFactory = require('../data/daoFactory')

// const estudiantesDAO = require('../data/estudiantesDAO_Arr')
// const estudiantesDAO = require('../data/estudiantesDAO_DB')

const router = express.Router()

const baseURI = '/api/funcion'


