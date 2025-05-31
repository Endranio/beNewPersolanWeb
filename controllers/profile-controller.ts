import { Request, Response,NextFunction } from "express";
import ProfileService from "../services/profile-service";
import { updateProfile } from "../schemas/profile-schema";
import { v2 as cloudinary,  } from 'cloudinary'
import { extractPublicId } from "cloudinary-build-url";




class Profile {

    async getProfile(req:Request,res:Response,next:NextFunction){
        try {
            const profile = await ProfileService.getProfile()
          
            res.json(profile)
        } catch (error) {
            next(error)
        }
    }

    async updateProfileController(req:Request,res:Response,next:NextFunction){
      try {

        const body = req.body
        
        const image = await ProfileService.getProfile()
        if(!image){
          res.json({message:"not found"})
          return
        }
        const publicId = extractPublicId(image.image)
        cloudinary.uploader.destroy(publicId)
        const validateProfile = await updateProfile.validateAsync(body)
        const update = await ProfileService.updateProfile(validateProfile)
        
        res.json({data:{...update},message:"edit success"} )
       
      } catch (error) {
        next(error)
      }
    } 
    
}

export default new Profile()