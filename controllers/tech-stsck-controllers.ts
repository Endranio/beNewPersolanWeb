import { Request, Response, NextFunction } from "express";
import techService from "../services/tech-stack-service";
import { createTechStack } from "../schemas/tech-stack-schema";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
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
          let uploadImage:UploadApiResponse = {} as UploadApiResponse
          if (!req.file) {
            res.status(400).json({ message: "missing image file" });
            return;
          }

          uploadImage = await cloudinary.uploader.upload(req.file.path) 
          fs.unlinkSync(req.file.path);
          const body = {
            ...req.body,
            tech:uploadImage.secure_url
          }
  
          const validateTech = await createTechStack.validateAsync(body)
          const create = await techService.createTech(validateTech)
          res.json({data:{...create},message:"create success"} )
         
        } catch (error) {
          next(error)
        }
      }
}

export default new techStack()