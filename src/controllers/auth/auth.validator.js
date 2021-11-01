const Joi = require('joi');
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

export const recoverPassword = {
  body: {
    email: Joi.string().email().required(),
  },
};

export const resetPassword = {
  body: {
    password: Joi.string().regex(RegExp(pattern)).required().min(8),
    repeatPassword: Joi.ref('password'),
    token: Joi.string().required(),
  },
};

export const register = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(RegExp(pattern)).required().min(8),
    repeatPassword: Joi.ref('password'),
  },
};

export const login = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
