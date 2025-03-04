const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(__dirname, "..", "images"));
    },
    filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Непідтримуваний формат файлу"), false);
    }
};

module.exports = multer({ storage, fileFilter });
