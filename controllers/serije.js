const sveSerije = require("../data/serije.json");
const Serija = require("../models/serija");
const Joi = require("joi");

const vratiSveSerije = async (req, res, next) => {
  const Serije = await Serija.find({});
  res.status(200);
  res.send({ serije: Serije });
};

const vratiSerijuPoNazivu = async (req, res, next) => {
  const { id } = req.params;
  const serija = await Serija.findById(id);
  res.status(200).send({ serija });
};

const vratiOpisSerije = async (req, res, next) => {
  const { id } = req.params;
  const serija = await Serija.findById(id);
  const plot = serija.plot;
  res.status(200).send({ plot });
};

const vratiEpizodeSerije = async (req, res, next) => {
  const { id } = req.params;
  const serija = await Serija.findById(id);
  const epizode = serija.episodes;
  res.status(200).send({ epizode });
};
const dodajSeriju = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    plot: Joi.string().required(),
    year: Joi.number().required(),
    rating: Joi.number().required(),
    episodes: Joi.number().required(),
  });
  console.log(req.body);
  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const serija = {
    title: req.body.title,
    plot: req.body.plot,
    rating: req.body.rating,
    year: req.body.year,
    episodes: req.body.episodes,
  };
  const series = new Serija(serija);
  const save = await series.save();
  res.status(201).send({ message: "Serija je sacuvana", serija: save });
};
const izbrisiSeriju = async (req, res, next) => {
  const { id } = req.params;
  await Serija.findByIdAndDelete(id);
  res.status(200).send({ msg: "Serija je izbrisana" });
};
const azurirajSeriju = async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  await Serija.findByIdAndUpdate(id, update);
  res.status(200).send({ msg: "Serija je azurirana" });
};

module.exports = {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije,
  dodajSeriju,
  azurirajSeriju,
  izbrisiSeriju,
};
