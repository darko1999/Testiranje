const express = require('express')
const router = express.Router()

const Serije = require('../controllers/serije')

const {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije
} = Serije

router.get('/', vratiSveSerije)
router.get('/:id', vratiSerijuPoNazivu)
router.get('/:id/opis', vratiOpisSerije)
router.get('/:id/epizode', vratiEpizodeSerije)

module.exports = router
