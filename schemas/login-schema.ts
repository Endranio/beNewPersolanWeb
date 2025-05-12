import joi from "joi"
import { LoginDTO } from "../dtos/dto"

const loginSchema = joi.object<LoginDTO>({
    email:joi.string().email(),
    password:joi.string()
})

export { loginSchema }