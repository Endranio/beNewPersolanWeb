import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import multer from "multer";
import path, { format } from "path";
import fs from "fs";
import { PrismaClient } from "../generated/prisma";
import { CloudinaryStorage } from "multer-storage-cloudinary";
dotenv.config();

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

// const storage = multer.diskStorage({
//     destination:function(req,file,callback){
//         callback(null,'./tmp/my-uploads')
//     },
//     filename:function(req,file,callback){
//         const uniqueSuffix = Date.now() + '_' + Math.round(Math.random()*1E9)
//         callback(null,file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname))
//     }
// })

// export const upload = multer({
//     storage:storage,
//     fileFilter:(req,file,callback)=>{
//         if(!whitelist.includes(file.mimetype)) {
//             return callback(new Error('file is not allowed'))
//         }
//         callback(null,true)
//     }
// })

// export const cloudinaryUploadMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const file = req.file;
//   if (!file) {
//     next();
//   }

//   try {
//     const result = await cloudinary.uploader.upload(file?.path || "", {
//       folder: "my-uploads",
//     });
//     fs.unlink(file?.path || "", () => {});
//     (req as any).imageUrl = result.secure_url;
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Cloudinary upload failed" });
//     return;
//   }
// };

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { allowed_formats: ["png", "jpeg", "jpg", "svg+xml"] } as unknown as {
    allowed_formats: string[]
  },
});

export const cloudinaryStorage = multer({storage})