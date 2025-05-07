import { CreateProjectDTO, UpdateProjectDTO } from '../dtos/dto'
import {PrismaClient} from '../generated/prisma'

const prisma = new PrismaClient()

class projectService {

async getProject(){
    return await prisma.project.findMany()
}

async createProject(data:CreateProjectDTO){
    return await prisma.project.create({
        data:{
            ...data
        }
    })
}

async updateProject(id:string,data:UpdateProjectDTO){
    return await prisma.project.update({
        where:{id},
        data:{
            ...data
        }
    })
}

async deleteProject(id:string){
    return await prisma.project.delete({
        where:{id}
    })
}

}

export default new projectService()

