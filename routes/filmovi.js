const express = require('express')
const router = express.Router()

const Filmovi = require('../controllers/filmovi')

const { vratiSveFilmove, vratiFilmovePoNazivu, vratiOpisFilma } = Filmovi

router.get('/', vratiSveFilmove)
router.get('/:id', vratiFilmovePoNazivu)
router.get('/:id/opis', vratiOpisFilma)

module.exports = router
