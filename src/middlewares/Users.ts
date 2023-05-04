import { NextFunction, Request, Response } from "express";

export const getUserData = (req: Request, res: Response, next: NextFunction) => {
    const { headers, body } = req;
    console.log({ headers, body });
    next();
}