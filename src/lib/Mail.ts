import nodemailer from "nodemailer";
//const ejs = require('../modules/ejs-extend');
import path from "path";
import fs from "fs";
import { IMail, MailConfig, MailData } from "../interfaces/lib/IMail";

class Mail implements IMail {
    public transporter: any;
    public settings: MailConfig;
    constructor(
        public data = {}
    ) {
        this.transporter = nodemailer.createTransport;
        this.settings = {
            host: "mail.vmers.com",
            port: 465,
            secure: true,
            auth: {
                user: "",
                pass: ""
            }
        }

    }
    sendMail(data: MailData, template: string, success: any, vars: any = {}): void {
        const Mvars = {
            APP_NAME: process.env.APP_NAME,
            APP_URL: (process.env.NODE_ENV !== "production" ? "https://rapp.vmers.com" : process.env.APP_URL),
            YEAR: new Date().getFullYear(),
        };
        this.transporter(this.settings).sendMail({
            from: `${process.env.APP_NAME} <${process.env.MAIL_SYSTEM}>`,
            to: data.to,
            subject: data.subject,
            text: "Hola, este es un correo de prueba"
            //html: "Correo de prueba"
        }, (err: any, info: any) => {
            if (err) {
                console.log(err);
            } else {
                success()
            }
        });
        /*ejs(path.join(__dirname, '../../views/mail_templates/', template),
            {
                ...Mvars,
                ...vars,
            }, (err, str) => {
                if (!err) {
                    this.transporter(this.settings).sendMail({
                        from: `${process.env.APP_NAME} <${process.env.MAIL_SYSTEM}>`,
                        to: data.to,
                        subject: data.subject,
                        //text: "Hola, este es un correo de prueba"
                        html: str
                    }, (err, info) => {
                        if (err) {
                            console.log(err);
                        } else {
                            success()
                        }
                    });
                }else{
                    console.log(err);
                }
            });*/

    }
}
export { Mail }