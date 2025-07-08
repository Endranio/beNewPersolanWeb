import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

class AuthService{

    async getUserByEmail(email:string){
      return  await prisma.user.findUnique({
            where:{email}
        })
        
    }

}

export default new AuthService()