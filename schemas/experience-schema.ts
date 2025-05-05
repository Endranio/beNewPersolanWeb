import joi from 'joi'
import { CreateExperienceDTO } from '../dtos/dto'

const createExperience = joi.object<CreateExperienceDTO>({
    jobDesk:joi.string(),
    company:joi.string(),
    endDate:joi.string(),
    position:joi.string(),
    startDate:joi.string(),
    tech:joi.string(),
    image:joi.string()
    
})
const updateExperience = joi.object<CreateExperienceDTO>({
    jobDesk:joi.string(),
    company:joi.string(),
    endDate:joi.string(),
    position:joi.string(),
    startDate:joi.string(),
    tech:joi.string(),
    image:joi.string()
    
})

export {createExperience,updateExperience}