import express from 'express'
import techStack from '../controllers/tech-stsck-controllers'
import {cloudinaryStorage} from '../middlewares/image-middleware'
// import AuthCheck from '../middlewares/auth-middleware'


const router = express.Router()

router.get("/",techStack.getTech)
router.post("/",cloudinaryStorage.single('tech'),techStack.createTech)
router.delete("/:id",techStack.deleteTech)

export default router