import { UpdateProfileDTO } from "../dtos/dto";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

class ProfileService {
  async getProfile() {
    return await prisma.profile.findFirst();
  }

  async updateProfile(data: UpdateProfileDTO) {
    return await prisma.profile.update({
      where: {
        id: "cf7b1844-8cef-42f1-a737-3026acf604dc",
      },
      data,
    });
  }
}


export default new ProfileService();
