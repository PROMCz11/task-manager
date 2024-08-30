require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.error(error.message);
  }
};
