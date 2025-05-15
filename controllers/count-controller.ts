import { PrismaClient } from "../generated/prisma";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export default async function CountData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const Experience = await prisma.experience.findMany();
    const Project = await prisma.project.findMany();
    const techStack = await prisma.techStack.findMany();
    const ExperienceCount = Experience.length;
    const ProjectCount = Project.length;
    const techStackCount = techStack.length;

    const data = {
      ExperienceCount,
      ProjectCount,
      techStackCount,
    };

    res.json(data);
  } catch (error) {
    next(error);
  }
}
