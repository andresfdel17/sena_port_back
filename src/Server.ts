import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";


//Controllers
import Login from "./controllers/Login";

dotenv.config();
const app: Express = express();
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.set("PORT", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
// parse requests of content-type - application/json
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "../public")));
//Rutas de controladores
app.use("/login", Login);
app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default app;
