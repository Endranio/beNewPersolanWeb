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
        id: "709485bf-82df-4026-b46e-b58f92620f7c",
      },
      data,
    });
  }
}


export default new ProfileService();
