const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
// Load environment variables

//MongoDb Connection
connectDb();

//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const api = process.env.API_URL;
//using auth routes

app.use(`${api}/auth`, authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listenning on port https://localhost:${process.env.PORT} `);
});
