import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`SUCCESSFULLY CONNECTED TO THE DATABASE`);
  } catch (error) {
    console.log(`FAILED TO CONNECT TO THE DB`);
    console.error(error);
    throw new Error(error);
  }
};

export default connectToDB;
