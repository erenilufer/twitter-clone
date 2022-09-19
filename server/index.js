import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import tweetRoutes from "./src/routes/tweetRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import cors from "cors";
import multer from "multer";
import { authTokenMiddleware } from "./src/middlewares/authTokenMiddleware.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
dotenv.config();
// DB Connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"));

// Image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, "image.jpeg"); // Image name will be setted
  },
});
const upload = multer({ storage: storage });
app.post("/upload/image", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "success" });
});

// Routes
app.use(authRoutes);
//app.use(authTokenMiddleware); // JWT Authorization Middleware
app.use(tweetRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
