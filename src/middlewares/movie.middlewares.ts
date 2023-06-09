import {Request,Response,NextFunction } from "express";

export default function validateSchema(schema:any) {
    return (req:Request, res:Response, next:NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
  
      if (error) {
        const err = error.details.map((detail:any) => detail.message);
        return res.status(422).send(err);
      }
      next();
    };
  }