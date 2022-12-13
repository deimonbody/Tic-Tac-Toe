import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .message("Email is not valid")
    .required(),
  password: Joi.string()
    .min(5)
    .message("The password should be more than 5 symbols")
    .max(20)
    .message("The password should be less than 20 symbols")
    .required(),
});

export const createNewRoomSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .message("The name should be more than 3 symbols")
    .max(10)
    .message("The name should be less than 10 symbols")
    .required(),
});
