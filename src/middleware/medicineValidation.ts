
import { NextFunction, Request, Response } from "express";
import Joi, { required } from "joi";

/** create a schema for new medicine */
const createSchema = Joi.object({
    name: Joi.string().required(),
    stock: Joi.number().required().min(0),
    price: Joi.number().min(0).required(),
    exp_date: Joi.date().required(),
    type: Joi.string().valid("syrup", "tablet", "powder").required()
})

const createValidation = (req: Request, res:Response, next: NextFunction) =>{
    const validate = createSchema.validate(req.body)
    if(validate.error){
        return res.status(400).json({
            message:validate.error.details.map(it =>it.message).join()
        })
    }
    return next()
}
const updateScheme = Joi.object({
    name: Joi.string().optional(),
    stock: Joi.number().optional().min(0),
    price: Joi.number().min(0).optional(),
    exp_date: Joi.date().optional(),
    type: Joi.string().valid("syrup", "tablet", "powder").optional()
})

const updateValidation = (req: Request, res:Response, next: NextFunction) =>{
    const validate = updateScheme.validate(req.body)
    if(validate.error){
        return res.status(400).json({
            message:validate.error.details.map(it =>it.message).join()
        })
    }
    return next()
}

export {createValidation, updateValidation}