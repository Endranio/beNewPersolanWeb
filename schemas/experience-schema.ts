import joi from 'joi'
import { CreateExperienceDTO } from '../dtos/dto'

const createExperience = joi.object<CreateExperienceDTO>({
    jobdesk:joi.array(),
    company:joi.string(),
    endDate:joi.string(),
    position:joi.string(),
    startDate:joi.string(),
    tech:joi.array(),
    image:joi.string()
    
})
const updateExperience = joi.object<CreateExperienceDTO>({
    jobdesk:joi.array(),
    company:joi.string(),
    endDate:joi.string(),
    position:joi.string(),
    startDate:joi.string(),
    tech:joi.array(),
    image:joi.string()
    
})

export {createExperience,updateExperience}