const express = require("express");
const router = express.Router();

const Serije = require("../controllers/serije");

const {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije,
  dodajSeriju,
  azurirajSeriju,
  izbrisiSeriju,
} = Serije;

router.route("/").get(vratiSveSerije).post(dodajSeriju);
router
  .route("/:id")
  .get(vratiSerijuPoNazivu)
  .patch(azurirajSeriju)
  .delete(izbrisiSeriju);
router.get("/:id/opis", vratiOpisSerije);
router.get("/:id/epizode", vratiEpizodeSerije);

module.exports = router;
