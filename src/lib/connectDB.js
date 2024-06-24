"use server";
import mongoose from "mongoose";
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_OPTIONS } = process.env;
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?${DB_OPTIONS}`;
async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to DB");

    return;
  } else {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(uri);

      if (mongoose.connections[0].readyState === 0) {
        throw new Error("Error in connecting to database");
      } else if (mongoose.connections[0].readyState === 1) {
        console.log("Connected to DB");
      }
    } catch (error) {
      console.log(error.message);
    }

  }
}

export default connectDB;
