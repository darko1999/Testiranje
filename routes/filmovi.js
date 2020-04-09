const express = require("express");
const router = express.Router();
const { validacija } = require("../middlewares/validation/validation");
const {
  dodajFilmSchema,
  izmeniFilmSchema,
} = require("../middlewares/validation/schemas/filmovi");

const Filmovi = require("../controllers/filmovi");

const {
  vratiSveFilmove,
  vratiFilmovePoNazivu,
  vratiOpisFilma,
  dodajFilm,
  izbrisiFilm,
  azurirajFilm,
  izmeniCeoFilm,
} = Filmovi;

router
  .route("/")
  .get(vratiSveFilmove)
  .post(validacija(dodajFilmSchema), dodajFilm);
router
  .route("/:id")
  .get(vratiFilmovePoNazivu)
  .put(validacija(dodajFilmSchema), azurirajFilm)
  .delete(izbrisiFilm)
  .patch(validacija(izmeniFilmSchema), azurirajFilm);
router.get("/:id/opis", vratiOpisFilma);

module.exports = router;
