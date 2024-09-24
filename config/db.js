const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://hansrohit:hansrohit@in-aws.9ihsy.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS"
);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("db connected");
});
connection.on("error", () => {
  console.log("error");
});

module.exports = mongoose;
