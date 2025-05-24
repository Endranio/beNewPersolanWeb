import { Request, Response, NextFunction } from "express";
import techService from "../services/tech-stack-service";
import { createTechStack } from "../schemas/tech-stack-schema";
import { v2 as cloudinary, } from 'cloudinary'
import { extractPublicId } from "cloudinary-build-url";
import fs from 'fs'

class techStack {
  async getTech(req: Request, res: Response, next: NextFunction) {
    try {
      const tech = await techService.getTech();
     
      res.json(tech);
    } catch (error) {
      next(error)
    }
  }

  async createTech(req:Request,res:Response,next:NextFunction){
        try {
          
          const body = {
            ...req.body,
            tech:req.file?.path
          }
  
          const validateTech = await createTechStack.validateAsync(body)
          const create = await techService.createTech(validateTech)
          res.json({data:{...create},message:"create success"} )
         
        } catch (error) {
          next(error)
        }
      }

      async deleteTech(req:Request,res:Response,next:NextFunction){
        try {
          const { id } = req.params;
          const Tech = await techService.getTechById(id)
          if(!Tech){
            res.status(400).json({massage:"image not found"})
            return
          }
          const image = Tech.tech
          const publicId = extractPublicId(image)
          
          await cloudinary.uploader.destroy(publicId)
      await techService.deleteTech(id);
      res.json({message:'deleted'});
        } catch (error) {
          next(error)
        }
      }
}

export default new techStack()