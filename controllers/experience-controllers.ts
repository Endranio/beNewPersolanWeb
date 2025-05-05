import { Request, Response,NextFunction } from "express";
import ExperienceService from "../services/experience-service";
import { updateExperience,createExperience } from "../schemas/experience-schema";




class Experience {

    async getExperience(req:Request,res:Response,next:NextFunction){
        try {
            const experience = await ExperienceService.getExperience()
            if (!experience) {
                 res.status(404).json({ message: "Experience not found" });
              }
            res.json(experience)
        } catch (error:any) {
            res.status(400).json({
                error: error.details[0].message,
              });
        }
    }

    async updateExperienceController(req:Request,res:Response,next:NextFunction){
      try {
        const body = req.body
        const {id} = req.params
        const validateExperience = await updateExperience.validateAsync(body)
        const update = await ExperienceService.updateExperience(id,validateExperience)
        res.json({data:{...update},message:"update success"} )
       
      } catch (error:any) {
        res.status(400).json({
          error: error.details[0].message,
        });
      }
    }

     async createExperience(req:Request,res:Response,next:NextFunction){
            try {
              const body = req.body
              const validateExperience = await createExperience.validateAsync(body)
              const create = await ExperienceService.createExperience(validateExperience)
              res.json({data:{...create},message:"create success"} )
             
            } catch (error:any) {
              res.status(400).json({
                error: error.details[0].message,
              });
            }
          }
    
}

export default new Experience()