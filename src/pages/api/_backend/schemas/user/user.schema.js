const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6);
const role = Joi.string().min(5);
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.number().positive();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
  name: name.required(),
  lastName: lastName.required(),
  phone,
});

const updateUserSchema = Joi.object({
  email,
  password,
  role,
  name,
  lastName,
  phone,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
};
