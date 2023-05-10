import { Request } from "express";
export interface RequestM extends Request {
    actualUser: IDBUser;
}

export interface IDBUser {
    id: number;
    type_id: number;
    lang: string;
    name: string;
    last_name: string;
    email: string;
    password: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}