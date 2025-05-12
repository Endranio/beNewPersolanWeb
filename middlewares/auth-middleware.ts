import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'


export default function AuthCheck(req:Request,res:Response,next:NextFunction){
    const token = req.headers["authorization"] || ""
    const jwtSecret = process.env.JWT_TOKEN || ""
    const user = jwt.verify(token,jwtSecret)

    if(!user){
        res.status(401).json({
            message:"unauthorized"
        })
        return
    }

    (req as any).user = user

    next()
}