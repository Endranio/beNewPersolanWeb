import {Profile, TechStack,Experience, Project,User} from '../generated/prisma'

export type UpdateProfileDTO = Pick<Profile,"available" |"email"|"cv"| "description" | "headers" | "id" | "location" | "position" | "whatsapp" | "image">
export type LoginDTO = Pick<User,"email"|"password">
export type UpdateExperienceDTO = Pick<Experience,"company"| "endDate"|"jobdesk"|"position"|"startDate"|"tech"|"image">
export type CreateExperienceDTO = Pick<Experience,"company"| "endDate"|"jobdesk"|"position"|"startDate"|"tech"|"image">
export type CreateProjectDTO = Pick<Project,"image"|"description"|"isDemo"|"isGithub"|"linkDemo"|"linkGithub"|"tech"|"title">
export type UpdateProjectDTO = Pick<Project,"image"|"description"|"isDemo"|"isGithub"|"linkDemo"|"linkGithub"|"tech"|"title">
export type CreateTechStackDTO = Pick<TechStack,"name" |"tech">