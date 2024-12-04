// validationSchemas.js
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    // Добавьте другие поля и правила валидации по мере необходимости
});

const tripSchema = Joi.object({
    destination: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    // Добавьте другие поля и правила валидации по мере необходимости
});

const routeSchema = Joi.object({
    name: Joi.string().required(),
    length: Joi.number().required(),
    // Добавьте другие поля и правила валидации по мере необходимости
});

module.exports = {
    userSchema,
    tripSchema,
    routeSchema
};
