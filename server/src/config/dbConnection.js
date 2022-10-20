import mongoose from "mongoose";
export const connectToDatabase = async () => {
  await mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to db",process.env.PORT));
};
