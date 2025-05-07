import { Request, Response, NextFunction } from "express";
import projectService from "../services/project-service";
import { updateProject,createProject } from "../schemas/project-schema";
import { UploadApiResponse } from "cloudinary";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

class projectControllers {
  async getAllProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await projectService.getProject();
      res.json(project);
    } catch (error) {
      next(error);
    }
  }

  async createProject(req: Request, res: Response, next: NextFunction) {
    try {

     

      const body = req.body
      const validateProject = await createProject.validateAsync(body)
      const create = await projectService.createProject(validateProject);
      res.json({data:create , message:"create success"});
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      let uploadImage:UploadApiResponse ={} as UploadApiResponse

      if(!req.file){
        res.status(400).json({message:"missing image file"})
        return
      }

      uploadImage = await cloudinary.uploader.upload(req.file.path)
      fs.unlinkSync(req.file.path)

      const body = {
        ...req.body,
        image:uploadImage.secure_url
      }
      const validateProject = await updateProject.validateAsync(body)
      const update = await projectService.updateProject(id, validateProject);
      res.json({data:update , message:"crete success"});
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req:Request,res:Response,next:NextFunction){
    try{
      const {id} = req.params
      await projectService.deleteProject(id)
      res.json({message:"deleted"})
    }catch(error){
      next(error)
    }
  }
}

export default new projectControllers();
