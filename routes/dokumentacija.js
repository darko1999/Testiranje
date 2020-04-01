const express = require('express')
const router = express.Router()

const Dokumentacija = require('../controllers/dokumentacija')

const { vratiDokumentaciju } = Dokumentacija

router.get('/', vratiDokumentaciju)

module.exports = router
