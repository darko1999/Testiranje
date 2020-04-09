const sviGlumci = require("../data/glumci.json");
const Glumac = require("../models/glumac");
const Joi = require("joi");

const vratiSveGlumce = async (req, res, next) => {
  const glumac = await Glumac.find({});
  res.status(200).send({ glumac });
};

const vratiGlumcaPoImenuIPrezimenu = async (req, res, next) => {
  const { id } = req.params;
  const glumac = await Glumac.findById(id);
  res.status(200).send({ glumac });
};

const vratiGodineGlumca = async (req, res, next) => {
  const { id } = req.params;
  const glumac = await Glumac.findById(id);
  const age = glumac.age;
  res.status(200).send({ age });
};

const vratiRejtingGlumca = async (req, res, next) => {
  const { id } = req.params;
  const glumac = await Glumac.findById(id);
  const rating = glumac.rating;
  res.status(200).send({ rating });
};
const dodajGlumca = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    rating: Joi.number().required(),
    movies: Joi.string().required(),
  });
  console.log(req.body);
  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const glumac = {
    name: req.body.name,
    age: req.body.plot,
    rating: req.body.rating,
    movies: req.body.movies,
  };
  const actor = new Glumac(glumac);
  const save = await actor.save();
  res.status(201).send({ message: "Glumac je sacuvan", glumac: save });
};
const izbrisiGlumca = async (req, res, next) => {
  const { id } = req.params;
  await Glumac.findByIdAndDelete(id);
  res.status(200).send({ msg: "Glumac je izbrisan" });
};
const azurirajGlumca = async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  await Glumac.findByIdAndUpdate(id, update);
  res.status(200).send({ msg: "Glumac je azuriran" });
};
module.exports = {
  vratiSveGlumce,
  vratiGlumcaPoImenuIPrezimenu,
  vratiGodineGlumca,
  vratiRejtingGlumca,
  dodajGlumca,
  izbrisiGlumca,
  azurirajGlumca,
};
