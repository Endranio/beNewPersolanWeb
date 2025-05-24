import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'


export default function AuthCheck(req:Request,res:Response,next:NextFunction){
    let token = req.headers['authorization'] || '';
    console.log(token,"ini")

  if (token.split(' ').length > 1) {
    token = token.split(' ')[1];
    console.log(token)
  }
  const jwtSecret = process.env.JWT_TOKEN || '';
  const user = jwt.verify(token, jwtSecret);

  if (!user) {
    res.status(401).json({
      message: 'User not found',
    });
    return;
  }

  (req as any).user = user;

  next();
}