import { Request, Response, Router } from "express";
import { ILoginRequest } from "../interfaces/controllers/Login/ILogin";
const router: Router = Router();

router.get(`/`, (req: Request, res: Response) => {
  res.send("Login");
});

router.post("/login", async (req: Request<ILoginRequest>, res: Response) => {
    console.log(req.body);
});

export default router;
