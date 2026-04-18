import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    if (process.env.JEST_WORKER_ID) {
      await mongoose.connection.db.dropDatabase();
    }

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export default connectDB;