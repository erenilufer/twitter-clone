import multer from "multer";
import express from "express";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + ".jpeg");
    /*     cb(null, file.originalname + "." + file.mimetype.split("/")[1]);  Image name will be setted
     */ console.log(file);
  },
});
const upload = multer({ storage: storage });
router.post("/upload/image", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "success" });
});
export default router;
