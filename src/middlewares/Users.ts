import { NextFunction, Request, Response } from "express";
import { JWTManager } from "../lib";

export const getUserData = (req: Request, res: Response, next: NextFunction) => {
    const { headers } = req;
    const token = headers.authorization?.split(" ")?.[1];
    const { data: user, exp } = JWTManager.decodeToken(token ?? "");
    if (!user || exp < Date.now() / 1000) return res.status(200).json({ text: "Unauthorized" });
    req.actualUser = user;
    next();
}