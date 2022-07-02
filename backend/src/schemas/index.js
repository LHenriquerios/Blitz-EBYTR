const Joi = require('joi');

module.exports = Joi.object({
  contents: Joi.string().required(),
  statusId: Joi.number().min(1).max(4).required(),
});
