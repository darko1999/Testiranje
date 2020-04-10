const express = require("express");
const router = express.Router();

const Serije = require("../controllers/serije");
const { validacija } = require("../middlewares/validation/validation");

const {
  dodajSerijuSchema,
  izmeniSerijuSchema,
} = require("../middlewares/validation/schemas/serije");

const {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije,
  dodajSeriju,
  azurirajSeriju,
  izbrisiSeriju,
} = Serije;

router
  .route("/")
  .get(vratiSveSerije)
  .post(validacija(dodajSerijuSchema), dodajSeriju);
router
  .route("/:id")
  .get(vratiSerijuPoNazivu)
  .patch(validacija(izmeniSerijuSchema), azurirajSeriju)
  .put(validacija(dodajSerijuSchema), azurirajSeriju)
  .delete(izbrisiSeriju);
router.get("/:id/opis", vratiOpisSerije);
router.get("/:id/epizode", vratiEpizodeSerije);

module.exports = router;
