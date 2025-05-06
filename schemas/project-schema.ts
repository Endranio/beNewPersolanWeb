import joi from 'joi'
import { CreateProjectDTO, UpdateProjectDTO } from '../dtos/dto'

const createProject = joi.object<CreateProjectDTO>({
description:joi.string(),
isDemo:joi.boolean().optional(),
isGithub:joi.boolean().optional(),
linkDemo:joi.string().optional(),
linkGithub:joi.string().optional(),
tech:joi.string(),
title:joi.string(),
image:joi.string()
})

const updateProject = joi.object<UpdateProjectDTO>({
description:joi.string(),
isDemo:joi.boolean().optional(),
isGithub:joi.boolean().optional(),
linkDemo:joi.string().optional(),
linkGithub:joi.string().optional(),
tech:joi.string(),
title:joi.string(),
image:joi.string()
})

export {createProject,updateProject}