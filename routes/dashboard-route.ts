import express from 'express'
import experience from '../controllers/experience-controllers'
import {upload} from '../middlewares/image-middleware'
import CountData from '../controllers/count-controller'

const router = express.Router()

router.get("/",CountData)

export default router 