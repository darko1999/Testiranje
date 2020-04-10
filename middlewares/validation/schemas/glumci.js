const Joi = require("joi");

const dodajGlumcaSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  rating: Joi.number().required(),
  movies: Joi.array().items(Joi.string()).required(),
});

const izmeniGlumcaSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  rating: Joi.number(),
  movies: Joi.array().items(Joi.string()),
});

module.exports = { dodajGlumcaSchema, izmeniGlumcaSchema };
