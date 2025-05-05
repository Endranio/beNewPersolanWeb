import { Request, Response, NextFunction } from "express";
import techService from "../services/tech-stack-service";
import { createTechStack } from "../schemas/tech-stack-schema";

class techStack {
  async getTech(req: Request, res: Response, next: NextFunction) {
    try {
      const tech = await techService.getTech();
     
      res.json(tech);
    } catch (error: any) {
      res.status(400).json({
        error: error.details[0].message,
      });
    }
  }

  async createTech(req:Request,res:Response,next:NextFunction){
        try {
          const body = req.body
  
          const validateTech = await createTechStack.validateAsync(body)
          const create = await techService.createTech(validateTech)
          res.json({data:{...create},message:"create success"} )
         
        } catch (error:any) {
          res.status(400).json({
            error: error.details[0].message,
          });
        }
      }
}

export default new techStack()