import { Request, Response,NextFunction } from "express";
import ProfileService from "../services/profile-service";
import { updateProfile } from "../schemas/profile-schema";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import fs from 'fs'




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

         let uploadImage:UploadApiResponse = {} as UploadApiResponse
                  if (!req.file) {
                    res.status(400).json({ message: "missing image file" });
                    return;
                  }

        uploadImage = await cloudinary.uploader.upload(req.file.path) 
                fs.unlinkSync(req.file.path);
                const body = {
                  ...req.body,
                  image:uploadImage.secure_url
                }

        const validateProfile = await updateProfile.validateAsync(body)
        const update = await ProfileService.updateProfile(validateProfile)
        res.json({data:{...update},message:"edit success"} )
       
      } catch (error) {
        next(error)
      }
    }
    
}

export default new Profile()