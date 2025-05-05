import {Profile, TechStack,Experience, Project} from '../generated/prisma'

export type UpdateProfileDTO = Pick<Profile,"available" | "cv"| "description" | "headers" | "id" | "location" | "position" | "whatsapp">
export type UpdateExperienceDTO = Pick<Experience,"company"| "endDate"|"jobDesk"|"position"|"startDate"|"tech">
export type CreateExperienceDTO = Pick<Experience,"company"| "endDate"|"jobDesk"|"position"|"startDate"|"tech"|"image">
export type CreateProjectDTO = Pick<Project,"description"|"isDemo"|"isGithub"|"linkDemo"|"linkGithub"|"tech"|"title">
export type UpdateProjectDTO = Pick<Project,"description"|"isDemo"|"isGithub"|"linkDemo"|"linkGithub"|"tech"|"title">
export type CreateTechStackDTO = Pick<TechStack,"name" |"tech">