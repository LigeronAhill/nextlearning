import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("Missing MONGODB_URL");
  } else if (isConnected) {
    return console.log("Mongo DB is already connected");
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "nextlearning",
      });
      isConnected = true;
      console.log("MongoDB is connected");
    } catch (error) {
      console.log("MongoDB connection failed: ", error);
    }
  }
};
