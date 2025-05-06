import express from 'express'
import techStack from '../controllers/tech-stsck-controllers'
import {upload} from '../middlewares/image-middleware'


const router = express.Router()

router.get("/",techStack.getTech)
router.post("/",upload.single('tech'),techStack.createTech)

export default router