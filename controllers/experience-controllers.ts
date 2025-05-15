import { Request, Response,NextFunction } from "express";
import ExperienceService from "../services/experience-service";
import { updateExperience,createExperience } from "../schemas/experience-schema";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import fs from 'fs'
import experienceService from "../services/experience-service";



class Experience {

    async getExperience(req:Request,res:Response,next:NextFunction){
        try {
            const experience = await ExperienceService.getExperience()
           
            if (!experience) {
                 res.status(404).json({ message: "Experience not found" });
              }
            res.json(experience)
        } catch (error) {
            next(error)
        }
    }

    async updateExperienceController(req:Request,res:Response,next:NextFunction){
      try {
        const {id} = req.params
         const body = req.body
        const validateExperience = await updateExperience.validateAsync(body)
        const update = await ExperienceService.updateExperience(id,validateExperience)
        res.json({data:{...update},message:"edit success"} )
       
      } catch (error) {
        next(error)
      }
    }

     async createExperience(req:Request,res:Response,next:NextFunction){
            try {

            
              const body = req.body
              const validateExperience = await createExperience.validateAsync(body)
              const create = await ExperienceService.createExperience(validateExperience)
              res.json({data:{...create},message:"create success"} )
             
            } catch (error) {
              next(error)
            }
          }

          async deleteExperience(req:Request,res:Response,next:NextFunction){
            try{
              const {id} = req.params
              await experienceService.deleteExperience(id)
              res.json({message:"deleted"})
            }catch(error){
              next(error)
            }
          }
    
}

export default new Experience()