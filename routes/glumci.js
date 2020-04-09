const express = require("express");
const router = express.Router();

const { validacija } = require("../middlewares/validation/validation");
const {
  dodajGlumcaSchema,
} = require("../middlewares/validation/schemas/glumci");

const Glumci = require("../controllers/glumci");

const {
  vratiSveGlumce,
  vratiGlumcaPoImenuIPrezimenu,
  vratiGodineGlumca,
  vratiRejtingGlumca,
  dodajGlumca,
  izbrisiGlumca,
  azurirajGlumca,
} = Glumci;

router
  .route("/")
  .get(vratiSveGlumce)
  .post(validacija(dodajGlumcaSchema), dodajGlumca);
router
  .route("/:id")
  .get(vratiGlumcaPoImenuIPrezimenu)
  .patch(azurirajGlumca)
  .delete(izbrisiGlumca);
router.get("/:id/godine", vratiGodineGlumca);
router.get("/:id/rejting", vratiRejtingGlumca);

module.exports = router;
