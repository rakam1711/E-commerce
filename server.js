require("dotenv").config();
const mongoose = require("mongoose");
const { connectToDatabase } = require("./config/index");
const app = require("./src/app");

const { PORT } = process.env;
(async () => {
  try {
    console.log("Initializing server");
    await connectToDatabase();
    app
      .listen(PORT, () =>
        console.log(`Server is running on http://localhost:${PORT}`)
      )
      .on("error", shutdown);
  } catch (error) {
    shutdown(error);
  }
})();

async function shutdown(err) {
  console.log("Unable to initialize the server:", err.message);
  await mongoose.connection.close();
  process.exit(1);
}
