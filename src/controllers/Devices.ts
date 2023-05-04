import { Request, Response, Router } from "express";
import { db } from "../db/connection";
import { JWTManager, Mail, PasswordManager } from "../lib";
import { initModels } from "../models";
import { getUserData } from "../middlewares";
const Devices: Router = Router();
const {
  main_users: Users,
  system_temp_pass: TempPass
} = initModels(db.conection);



Devices.get(`/`, [getUserData], (req: Request, res: Response) => {
  /*const mail = new Mail;
  mail.sendMail({
    to: "istjuanmolina@gmail.com",
    from: "andresfdel13@gmail.com",
    subject: "TEST"
  }, "", () => {
    console.log("Correo  enviado");
  });*/
  res.json({
    text: "Devices controller ready"
  })
});

export { Devices };