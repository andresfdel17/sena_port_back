export interface INewDeviceBody {
    brand: string,
    color: string;
    serial_number: string;
    details: string;
}

export interface INewDeviceImage {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}