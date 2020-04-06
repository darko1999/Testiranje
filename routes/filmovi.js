const express = require("express");
const router = express.Router();

const Filmovi = require("../controllers/filmovi");

const {
  vratiSveFilmove,
  vratiFilmovePoNazivu,
  vratiOpisFilma,
  dodajFilm,
} = Filmovi;

router.get("/", vratiSveFilmove);
router.get("/:id", vratiFilmovePoNazivu);
router.get("/:id/opis", vratiOpisFilma);

router.post("/", dodajFilm);

module.exports = router;
