import joi from 'joi'
import { CreateProjectDTO, UpdateProjectDTO } from '../dtos/dto'

const createProject = joi.object<CreateProjectDTO>({
description:joi.string(),
isDemo:joi.boolean(),
isGithub:joi.boolean(),
linkDemo:joi.string().optional().allow(null),
linkGithub:joi.string().optional().allow(null),
tech:joi.array(),
title:joi.string(),
image:joi.string()
})

const updateProject = joi.object<UpdateProjectDTO>({
description:joi.string(),
isDemo:joi.boolean().optional(),
isGithub:joi.boolean().optional(),
linkDemo:joi.string().optional().allow(null),
linkGithub:joi.string().optional().allow(null),
tech:joi.array(),
title:joi.string(),
image:joi.string()
}) 

export {createProject,updateProject}