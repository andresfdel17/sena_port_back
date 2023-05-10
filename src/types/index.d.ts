import { IDBUser } from "../interfaces";

export {};

declare global {
  namespace Express {
    interface Request {
      actualUser: IDBUser;
    }
  }
}