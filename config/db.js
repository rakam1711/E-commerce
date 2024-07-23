const mongoose = require("mongoose");
const { DB_URI } = process.env;

const connectToDatabase = async () => {
  console.log(`Connecting to database...`);

  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URI)
      .then(resolve)
      .catch((err) => {
        console.log("Unable to connect to the database:", err.message);
        mongoose.connection.close(); //also emmits disconnected
        reject(err);
      });
  });
};

module.exports = connectToDatabase;
