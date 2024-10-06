const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDb = require("./config/db");

const Product = require("./models/product");
//Routes
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(
  cors({
    origin: "http://localhost:5173", //Url to be updated later with actual link
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());
//MongoDb Connection
connectDb();

//middleware
// Handle all OPTIONS requests globally

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const api = process.env.API_URL;
//using auth routes

app.use(`${api}/auth`, authRoutes);
app.use(`${api}/cart`, cartRoutes);
app.use(`${api}/products`, productRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const productsData = [
  {
    img: "//www.snitch.co.in/cdn/shop/files/4369ae70e755841ff395fd1207a836fc.webp?v=1724416086", // Main image
    //Array of images to add
    images: [
      "image1-url.jpg",
      "image2-url.jpg",
      "image3-url.jpg",
      "image4-url.jpg",
    ],

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!",
    alt: "snitch man",
    price: 1899, // Discounted price
    actualMrp: 3000, // Actual MRP
    title: "Black Textured Casual Shirt",
    category: "Shirts",
    stock: 12,
    gender: "Women",
    details: {
      material: "Cotton",
      fit: "Slim Fit",
      color: "Black",

      care: "Machine wash cold with like colors",
      delivery: "Free delivery within 5-7 business days.",
    },
  },
];

const populateProducts = async () => {
  try {
    await Product.insertMany(productsData);
    console.log("Products populated successfully");
  } catch (error) {
    console.error("Error populating products: ", error);
  }
};

populateProducts();

app.listen(process.env.PORT, () => {
  console.log(`listenning on port https://localhost:${process.env.PORT} `);
});
