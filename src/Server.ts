import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import Login from "./controllers/Login";

dotenv.config();

const app: Express = express();
app.set("PORT", process.env.PORT || 3000);
app.use("/login", Login);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app;