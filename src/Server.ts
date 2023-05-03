import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

//Controllers
import { Login, Home } from "./controllers";


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
app.use("/img", express.static(path.join("./uploads")));
//Rutas de controladores
app.use("/api/login", Login);
app.use("/api/home", Home);
//carpeta raiz
app.get("/", async (req: Request, res: Response) => {
  res.json({ text: `${process.env.APP_NAME} Ready!` })
});

export default app;
