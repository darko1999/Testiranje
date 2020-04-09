const Joi = require("joi");

const dodajGlumcaSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  rating: Joi.number().required(),
  movies: Joi.array().items(Joi.string()).required(),
});

const izmeniGlumcaSchema = {};

module.exports = { dodajGlumcaSchema, izmeniGlumcaSchema };
