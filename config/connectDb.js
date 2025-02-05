const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;



// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const colors = require("colors");

// dotenv.config(); // Make sure this is at the top of your code

// // Log the MongoDB URI to confirm it's being read from .env file
// console.log("MONGO_URL:", process.env.MONGO_URL);  // Debugging line

// const connectDb = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("MONGO_URL is not defined in the .env file.");
//     }
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
//   } catch (error) {
//     console.log(`${error}`.bgRed);
//   }
// };

// module.exports = connectDb;
