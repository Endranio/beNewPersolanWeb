import { Request, Response,NextFunction } from "express";
import ProfileService from "../services/profile-service";
import { updateProfile } from "../schemas/profile-schema";




class Profile {

    async getProfile(req:Request,res:Response,next:NextFunction){
        try {
            const profile = await ProfileService.getProfile()
           
            res.json(profile)
        } catch (error:any) {
            res.status(400).json({
                error: error.details[0].message,
              });
        }
    }

    async updateProfileController(req:Request,res:Response,next:NextFunction){
      try {
        const body = req.body
        const validateProfile = await updateProfile.validateAsync(body)
        const update = await ProfileService.updateProfile(validateProfile)
        res.json({data:{...update},message:"update success"} )
       
      } catch (error:any) {
        res.status(400).json({
          error: error.details[0].message,
        });
      }
    }
    
}

export default new Profile()