import Joi from "joi";

export const createArticleSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).required(),
    userId: Joi.string().required()
}); 