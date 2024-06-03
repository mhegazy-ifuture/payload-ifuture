import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then((res) => console.log("DB connection success"))
    .catch((err) => console.log("DB connection Fail", err));
};
