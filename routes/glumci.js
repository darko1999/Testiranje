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
router.get('/:id', vratiGlumcaPoImenuIPrezimenu)
router.get('/:id/godine', vratiGodineGlumca)
router.get('/:id/rejting', vratiRejtingGlumca)

module.exports = router
