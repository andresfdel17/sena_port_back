import { Request, Response, Router } from "express";
import { db } from "../db/connection";
import { initModels } from "../models";
const router: Router = Router();
const { main_users: Users } = initModels(db.conection);

router.get(`/`, (req: Request, res: Response) => {
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
    console.log(user);
    return res.json({
      code: 200,
      text: "logged-in"
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
