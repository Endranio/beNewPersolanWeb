import joi from 'joi'
import { CreateTechStackDTO } from '../dtos/dto'

const createTechStack = joi.object<CreateTechStackDTO>({
    name:joi.string(),
    tech:joi.string()
})

export {createTechStack}