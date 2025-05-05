import express from 'express'
import techStack from '../controllers/tech-stsck-controllers'
const router = express.Router()

router.get("/",techStack.getTech)
router.post("/",techStack.createTech)

export default router