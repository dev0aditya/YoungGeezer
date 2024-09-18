const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected successfully");
  } catch (err) {
    console.error("Mongodb connection faild", err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
