import Joi from '@hapi/joi';

const newUserRegisterValidation = Joi.object({
    fullName: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
    phoneNumber: Joi.string().min(10).max(10).required(),
    address: Joi.string().min(3).max(50).required()
})

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
})
export{
    newUserRegisterValidation,
    loginValidation,

}