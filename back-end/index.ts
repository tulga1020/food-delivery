import { connectDb } from "./db";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
connectDb();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  // console.log(`http://localhost:8000`);
});
