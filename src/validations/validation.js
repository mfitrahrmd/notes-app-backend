const Joi = require("joi");

const addNoteValidation = () => {
  return Joi.object({
    title: Joi.string().min(1).max(50).required(),
    body: Joi.string().min(1).max(255).required(),
    tags: Joi.array().items(Joi.string()).required(),
  });
};

const editNoteValidation = () => {
  return Joi.object({
    title: Joi.string().min(1).max(50),
    body: Joi.string().min(1).max(255),
    tags: Joi.array().items(Joi.string()),
  });
};

module.exports = { addNoteValidation, editNoteValidation };
