const Joi = require("joi");

const dodajSerijuSchema = Joi.object({
  title: Joi.string().required(),
  plot: Joi.string().required(),
  year: Joi.number().required(),
  rating: Joi.number().required(),
  episodes: Joi.number().required(),
});

const izmeniSerijuSchema = Joi.object({
  title: Joi.string(),
  plot: Joi.string(),
  year: Joi.number(),
  rating: Joi.number(),
  episodes: Joi.number(),
});

module.exports = { dodajSerijuSchema, izmeniSerijuSchema };
