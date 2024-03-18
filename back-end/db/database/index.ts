import { connect, set } from "mongoose";
const CONNECTION_STRING: string =
  "mongodb+srv://tulga1020:HJSzn0Unnap5pz6O@cluster0.7ptcwfh.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to DB");
  } catch (error) {
    console.log("DB connection unsuccessfully");
  }
};
