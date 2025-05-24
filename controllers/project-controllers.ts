import { Request, Response, NextFunction } from "express";
import projectService from "../services/project-service";
import { updateProject,createProject } from "../schemas/project-schema";
import {v2 as cloudinary } from 'cloudinary'
import { extractPublicId } from "cloudinary-build-url";

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

    
      const body = req.body
      const validateProject = await updateProject.validateAsync(body)
      const update = await projectService.updateProject(id, validateProject);
      const image = update.image
      const publicId = extractPublicId(image)
      cloudinary.uploader.destroy(publicId)
      res.json({data:update , message:"edit success"});
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req:Request,res:Response,next:NextFunction){
    try{
      const {id} = req.params
      const project = await projectService.getProjectById(id)
      const image = project?.image

      if(!image){
        res.status(400).json({message:"image not found"})
        return
      }

      const publicId = extractPublicId(image)
      await cloudinary.uploader.destroy(publicId)
      await projectService.deleteProject(id)
      res.json({message:"deleted"})
    }catch(error){
      next(error)
    }
  }
}

export default new projectControllers();
