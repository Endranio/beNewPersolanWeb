import express from 'express'
import CountData from '../controllers/count-controller'
import AuthCheck from '../middlewares/auth-middleware'


const router = express.Router()

router.get("/",CountData)

export default router 