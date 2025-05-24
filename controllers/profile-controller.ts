import { Request, Response,NextFunction } from "express";
import ProfileService from "../services/profile-service";
import { updateProfile } from "../schemas/profile-schema";
import { v2 as cloudinary,  } from 'cloudinary'
import fs from 'fs'
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
        
        const validateProfile = await updateProfile.validateAsync(body)
        const update = await ProfileService.updateProfile(validateProfile)
        const image = update.image
        const publicId = extractPublicId(image)
        cloudinary.uploader.destroy(publicId)
        
        res.json({data:{...update},message:"edit success"} )
       
      } catch (error) {
        next(error)
      }
    } 
    
}

export default new Profile()