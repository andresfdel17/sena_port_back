import { IPass } from "../interfaces/IPass";
import * as bcrypt from "bcryptjs";
export class PasswordManager implements IPass {
  public static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    const pass: string = await bcrypt.hash(password, salt);
    return pass;
  }
  public static async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
