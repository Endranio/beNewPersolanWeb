import { Request, Response, NextFunction } from "express";
import { loginSchema } from "../schemas/login-schema";
import authService from "../services/auth-service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function LoginController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;

    const { email, password } = await loginSchema.validateAsync(body);
    const user = await authService.getUserByEmail(email);

    if (!user) {
      res.status(404).json({
        message: "email/password wrong",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(404).json({
        message: "email/password wrong",
      });
      return;
    }

    const jwtSecret = process.env.JWT_TOKEN || "";

    const token = jwt.sign(
      {
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "12h",
      }
    );
    res.json({ message: "login success", token });
  } catch (error) {
    next(error);
  }
}

export async function check(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = (req as any).user
   
    const dataUser = await authService.getUserByEmail(payload.email)
// console.log(dataUser)
    res.json(dataUser);
  } catch (error) {
    next(error)
  }
}
