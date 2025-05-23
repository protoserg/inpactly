import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Mongoose Error" + error.message);
  }
};

export default connectMongo;
