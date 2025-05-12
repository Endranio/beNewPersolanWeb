import express from 'express'
import LoginController, { check } from '../controllers/auth-controllers'
import AuthCheck from '../middlewares/auth-middleware'


const router = express.Router()

router.post("/",LoginController)
router.post("/check",AuthCheck,check)

export default router