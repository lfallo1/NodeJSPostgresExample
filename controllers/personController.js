const express = require('express')
const personService = require('../services/personService')

const router = express.Router()

router.get('/', personService.getAllPersons)

router.get('/:id', personService.getPersonByID)

module.exports = router;