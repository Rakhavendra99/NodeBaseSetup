import Joi from '@hapi/joi';

const crateProductValidation = Joi.object({
    productName: Joi.string().min(3).max(20).required(),
    productPrice: Joi.number().required(),
    productQuantity: Joi.number().required(),
    productUpcCode: Joi.string().min(5).max(20).required()
})

const updateProductValidation = Joi.object({
    id: Joi.number().required(),
    productName: Joi.string().min(3).max(20),
    productPrice: Joi.number(),
    productQuantity: Joi.number(),
    productUpcCode: Joi.string().min(5).max(20)
})

const deleteProductValidation = Joi.object({
    id: Joi.number().required()
})

export {
    crateProductValidation,
    updateProductValidation,
    deleteProductValidation
}