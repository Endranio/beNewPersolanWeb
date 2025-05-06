import { CreateTechStackDTO } from "../dtos/dto";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

class techService {
  async getTech() {
    return await prisma.techStack.findMany();
  }

  async createTech(data: CreateTechStackDTO) {
    return await prisma.techStack.create({
      data: {
        tech:data.tech,
        name:data.name
      },
    });
  }
}

export default new techService();
