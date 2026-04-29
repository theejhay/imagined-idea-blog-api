import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
  static async connect() {
    await mongoose.connect(process.env.MONGO_URI as string, {
      maxPoolSize: 5, // Small pool — each serverless instance has its own
      minPoolSize: 0, // No idle connections kept open between invocations
      maxIdleTimeMS: 10000, // Release unused connections after 10s
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("Connected to MongoDB");
  }
}
export default Database;
