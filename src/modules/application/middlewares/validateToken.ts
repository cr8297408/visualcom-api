import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { envConfig } from "../../../../config.env";

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;
    console.log(token);
    if (!token) return res.status(400).json({ message: 'Prohibido el paso' });
    const decoded = jwt.verify(token, envConfig.JWT_SECRET ?? '');
    if(!decoded) res.status(400).json({ message: 'Prohibido el paso' });
    next();
  } catch (error) {
    console.log(error);
    return res.status(410).json({ message: 'No autorizado' });
  }
};
