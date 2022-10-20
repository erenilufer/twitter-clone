import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";
import cors from "cors";

import { connectToDatabase } from "./src/config/dbConnection.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static("src"));

const PORT = process.env.PORT;

// DB Connection
connectToDatabase();

// Routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("Server is Running!");
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
