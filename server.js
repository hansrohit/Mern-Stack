require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const dbConn = require("./config/db");
const Projects = require("./routes/projectRoute");
const Users = require("./routes/userRoute");

// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 7778;
app.use("/project", Projects);
app.use("/user", Users);
app.get("/", (req, res) => {
  res.status(400).json("Welcome");
});

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});
