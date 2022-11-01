import * as jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import { IJWT } from "../interfaces/IJWT";
export class JWTManager implements IJWT {
  public static createToken(data: any, secret: string): string {
    return jwt.sign(
      {
        data,
        iss: "app.sena",
        aud: "app.sena",
      },
      secret,
      {
        algorithm: "HS256",
        expiresIn: 60 * 60 * 12, //
      }
    );
  }
  public static decodeToken(token: string): any {
    try {
      let data = jwtDecode(token);
      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
