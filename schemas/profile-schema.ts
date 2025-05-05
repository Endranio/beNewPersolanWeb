import joi from "joi";
import { UpdateProfileDTO } from "../dtos/dto";

const updateProfile = joi.object<UpdateProfileDTO>({
  available: joi.boolean(),
  cv: joi.string(),
  description: joi.string(),
  headers: joi.string(),
  location: joi.string(),
  position: joi.string(),
  whatsapp: joi.string(),
});

export { updateProfile };
