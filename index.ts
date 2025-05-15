import express from 'express'
import Router from './routes/index'
import { errorHandler } from './middlewares/error-middleware'
import cors from 'cors'
import multer from 'multer'
import { cloudinaryUploadMiddleware, upload } from './middlewares/image-middleware'


const app = express()
const port = 5000
app.use(cors({
    origin:[
        "http://localhost:3001"
    ]
}))

app.use(express.json())

app.get("/",(req,res)=>{
 res.send("hello world")   
})

app.use(Router)
app.post('/upload',upload.single('image'),cloudinaryUploadMiddleware,(req,res)=>{
    res.json({imageUrl:(req as any).imageUrl})
})
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`port berjalan di ${port}`)
})
