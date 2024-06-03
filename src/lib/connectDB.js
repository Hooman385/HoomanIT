"use server";
import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to DB");

    return;
  } else {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI);
  }

  if (mongoose.connections[0].readyState === 0) {
    throw new Error("Error in connecting to database");
  } else if (mongoose.connections[0].readyState === 1) {
    console.log("Connected to DB");
  }
}

export default connectDB;
