import multer from "multer";
import path from "path";

export const uploadDIR: string = path.join(__dirname + "/../uploads/");

export const uploadStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, Date.now() + '-' + fileName)
    }
});

export const imageFilter: multer.Options = {
    fileFilter: (req, file, cb) => {
        if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}

export const uploader = (options: multer.Options): multer.Multer => {
    return multer(options);
}

