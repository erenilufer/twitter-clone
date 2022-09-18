import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
const port = 3001;

app.use(express.json());

dotenv.config();
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"));
app.use(authRoutes);
app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
