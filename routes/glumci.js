const express = require('express')
const router = express.Router()

const Glumci = require('../controllers/glumci')

const {
  vratiSveGlumce,
  vratiGlumcaPoImenuIPrezimenu,
  vratiGodineGlumca,
  vratiRejtingGlumca
} = Glumci

router.get('/', vratiSveGlumce)
router.get('/:imePrezime', vratiGlumcaPoImenuIPrezimenu)
router.get('/:imePrezime/godine', vratiGodineGlumca)
router.get('/:imePrezime/rejting', vratiRejtingGlumca)

module.exports = router
