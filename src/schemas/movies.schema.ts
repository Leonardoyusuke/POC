import Joi from "Joi"

export const moviesSchema = Joi.object({
    title:Joi.string().required(),
    plataform:Joi.string().required(),
    gender:Joi.string().required(),
    status:Joi.boolean()
})

export const updateMovieSchema = Joi.object({
    id:Joi.number().required(),
    status:Joi.boolean().required(),
    score:Joi.number().required()
})