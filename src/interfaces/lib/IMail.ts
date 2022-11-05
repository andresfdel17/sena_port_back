export interface IMail {
    settings: MailConfig;
    transporter: any;
    sendMail(data: MailData, template: string, success: any): void;
}

export interface IMailData {

}

export interface MailConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: MailConfigAuth;
}

export interface MailConfigAuth {
    user: string;
    pass: string;
}

export interface MailData {
    to: string;
    from: string;
    subject: string;
}