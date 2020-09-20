const Joi = require("joi");

//Validation Schema for the user data
const userSchema = Joi.object().keys({
  name: Joi.string()
    .regex(/^[A-Za-z]*$/)
    .required(),
  phoneNo: Joi.string()
    .regex(/^\d{10}$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  noOfSeats: Joi.number().max(6).required(),
  attendeeName: Joi.array().items(Joi.string()).required(),
  event: Joi.string().required()
});

module.exports = { userSchema };
