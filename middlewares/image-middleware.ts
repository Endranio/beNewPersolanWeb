import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
import multer from 'multer'
import path from 'path'

dotenv.config()

const whitelist = ['image/png','image/jpeg','image/jpg','image/svg+xml']



const cloud_name = process.env.CLOUD_NAME
const api_key = process.env.API_KEY
const api_secret = process.env.API_SECRET

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
})

const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./tmp/my-uploads')
    },
    filename:function(req,file,callback){
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random()*1E9)
        callback(null,file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname)) 
    }
})

export const upload = multer({
    storage:storage,
    fileFilter:(req,file,callback)=>{
        if(!whitelist.includes(file.mimetype)) {
            return callback(new Error('file is not allowed'))
        }
        callback(null,true)
    }
})