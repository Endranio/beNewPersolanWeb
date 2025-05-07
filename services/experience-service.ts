import {
  CreateExperienceDTO,
  UpdateExperienceDTO,
  UpdateProfileDTO,
} from "../dtos/dto";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

class ExperienceService {
  async getExperience() {
    return await prisma.experience.findMany();
  }

  async updateExperience(id: string, data: UpdateExperienceDTO) {
    return await prisma.experience.update({
      where: {
        id,
      },
      data,
    });
  }

  async createExperience(data: CreateExperienceDTO) {
    return await prisma.experience.create({
      data: {
        ...data,
      },
    });
  }

  async deleteExperience(id:string){
    return await prisma.experience.delete({
      where:{id}
    })
  }
  
}

export default new ExperienceService();
