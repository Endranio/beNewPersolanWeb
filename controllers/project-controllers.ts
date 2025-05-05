import { Request, Response, NextFunction } from "express";
import projectService from "../services/project-service";
import { updateProject,createProject } from "../schemas/project-schema";


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
      const body = req.body;
      const validateProject = await createProject.validateAsync(body)
      const create = await projectService.createProject(validateProject);
      res.json(create);
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const { id } = req.params;
      const validateProject = await updateProject.validateAsync(body)
      const update = await projectService.updateProject(id, validateProject);
      res.json(update);
    } catch (error) {
      next(error);
    }
  }
}

export default new projectControllers();
