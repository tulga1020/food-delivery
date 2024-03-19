import { connect, set } from "mongoose";
// "mongodb+srv://tulga1020:HJSzn0Unnap5pz6O@cluster0.7ptcwfh.mongodb.net/";
export const connectDb = async () => {
  const dblink = process.env.DBLINK!;
  set("strictQuery", false);

  try {
    await connect(dblink), console.log("Successfully connected to DB");
  } catch (error) {
    console.log("DB connection unsuccessfully");
  }
};
