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
        id: "a8beeb10-16ad-4de9-80ef-e99b05662bb7",
      },
      data,
    });
  }
}

export default new ProfileService();
