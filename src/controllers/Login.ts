import { Request, Response, Router } from "express";
import { db } from "../db/connection";
import { JWTManager, Mail, PasswordManager } from "../lib";
import { initModels } from "../models";
const router: Router = Router();
const {
  main_users: Users,
  system_temp_pass: TempPass
} = initModels(db.conection);


router.get(`/`, (req: Request, res: Response) => {
  /*const mail = new Mail;
  mail.sendMail({
    to: "istjuanmolina@gmail.com",
    from: "andresfdel13@gmail.com",
    subject: "TEST"
  }, "", () => {
    console.log("Correo  enviado");
  });*/
  res.json({
    text: "login controller ready"
  })
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({
      where: {
        email: username
      }
    });
    //Valida que exista el usuario
    if (!user) {
      return res.json({
        code: 404,
        text: "user-unk"
      });
    }
    //Valida la contraseña
    const verifyPass = await PasswordManager.comparePassword(password, user.password as string)
    if (!verifyPass) {
      return res.json({
        code: 401,
        text: "user-unk"
      });
    }
    const token = JWTManager.createToken(user.toJSON(), process.env.JWT_SECRET as string);
    const { exp } = JWTManager.decodeToken(token);
    return res.json({
      code: 200,
      text: "logged-in",
      token,
      expiresAt: exp,
      isAuthenticated: true,
      lang: user.lang
    })
  } catch (error) {
    console.error(error);
    return res.json({
      code: 500,
      text: "server-error"
    });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json({
      code: 200,
      text: "success"
    })

  } catch (error) {
    console.error(error);
    return res.json({
      code: 500,
      text: "server-error"
    });
  }
});

router.post("/send-code", async (req: Request, res: Response) => {
  try {
    const { email, translates } = req.body;
    const code = 100000 + Math.floor((Math.random()) * 900000);
    const addDay = (days: number): Date => {
      const date = new Date();
      date.setDate(date.getDate() + days);
      return date;
    }
    const tempCode = await TempPass.create({
      email,
      code,
      due_date: addDay(3).toISOString()
    });
    
    
    if (tempCode) {
      return res.json({
        code: 200,
        text: "code-send"
      });
    }
    return res.json({
      code: 400,
      text:" code-not-send"
    })


  } catch (error) {
    console.error(error);
    return res.json({
      code: 500,
      text: "server-error"
    });
  }
});
export default router;
