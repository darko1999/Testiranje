const sviFilmovi = require("../data/filmovi.json");
const Joi = require("joi");
const fs = require("fs");

const sortFilmove = (a, b, value) => {
  if (a[value] < b[value]) {
    return -1;
  }
  if (a[value] > b[value]) {
    return 1;
  }
  return 0;
};

const vratiSveFilmove = async (req, res, next) => {
  if (req.query.sort === "godina" && req.query.order === "asc") {
    const film = sviFilmovi.sort((a, b) => sortFilmove(a, b, "year"));
    res.status(200).send({ film });
  }
  if (req.query.sort === "godina" && req.query.order === "desc") {
    const film = sviFilmovi.sort((a, b) => sortFilmove(a, b, "year")).reverse();
    res.status(200).send({ film });
  }
  if (req.query.sort === "rejting" && req.query.order === "desc") {
    const film = sviFilmovi.sort((a, b) => sortFilmove(a, b, "raiting"));
    res.status(200).send({ film });
  }
  if (req.query.sort === "rejting" && req.query.order === "asc") {
    const film = sviFilmovi
      .sort((a, b) => sortFilmove(a, b, "raiting"))
      .reverse();
    res.status(200).send({ film });
  }
  if (!req.query.sort && !req.query.order) {
    res.status(200);
    res.send({ filmovi: sviFilmovi });
  }
};
const vratiFilmovePoNazivu = async (req, res, next) => {
  const film = sviFilmovi.find((film) => film.id === parseInt(req.params.id));
  if (!film) {
    res.status(404).send({ err: "Film ne postoji" });
  } else {
    res.status(200).send({ film });
  }
};

const vratiOpisFilma = async (req, res, next) => {
  const film = sviFilmovi.find((film) => film.id === parseInt(req.params.id));
  if (!film) {
    res.status(404).send({ err: "Film ne postoji" });
  } else {
    const plot = { Film: film.title, Opis: film.plot };
    res.status(200).send({ plot });
  }
};
const dodajFilm = async (req, res, next) => {
  const schema = {
    title: Joi.string().required(),
    plot: Joi.string().required(),
    year: Joi.number().required(),
    raiting: Joi.number().required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const film = {
    id: sviFilmovi.length + 1,
    title: req.body.title,
    plot: req.body.plot,
    raiting: req.body.raiting,
    year: req.body.year,
  };
  sviFilmovi.push(film);

  res.send(film);
};

module.exports = {
  vratiSveFilmove,
  vratiFilmovePoNazivu,
  vratiOpisFilma,
  dodajFilm,
};
