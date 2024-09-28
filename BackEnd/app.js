const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDb = require("./config/db");

const Product = require("./models/product");
//Routes
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");

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
app.use(`${api}/cart`, cartRoutes);
app.use(`${api}/products`, productRoutes);

const productsData = [
  {
    img: "//www.snitch.co.in/cdn/shop/files/4369ae70e755841ff395fd1207a836fc.webp?v=1724416086",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!",
    alt: "snitch man",
    price: 1899,
    title: "Black Textured Casual Shirt",
    category: "Shirts",
    stock: 12,
    gender: "Women",
    details: {
      material: "Cotton",
      fit: "Slim Fit",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      care: "Machine wash cold with like colors",
      delivery: "Free delivery within 5-7 business days.",
    },
  },
  {
    img: "//example.com/men1.jpg",
    desc: "Classic white cotton shirt perfect for formal and casual events.",
    alt: "Men's white shirt",
    price: 1499,
    title: "White Formal Shirt",
    category: "Shirts",
    stock: 10,
    gender: "Men",
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      color: "White",
      sizes: ["S", "M", "L", "XL"],
      care: "Machine wash cold with like colors",
      delivery: "Free delivery within 3-5 business days.",
    },
  },
  {
    img: "//example.com/men2.jpg",
    desc: "Comfortable and breathable joggers for daily wear.",
    alt: "Men's grey joggers",
    price: 999,
    title: "Grey Joggers",
    category: "Pants",
    stock: 15,
    gender: "Men",
    details: {
      material: "Polyester Blend",
      fit: "Slim Fit",
      color: "Grey",
      sizes: ["M", "L", "XL"],
      care: "Machine wash warm with like colors",
      delivery: "Free delivery within 5-7 business days.",
    },
  },
  {
    img: "//example.com/men3.jpg",
    desc: "Stylish blue denim jacket with button-down design.",
    alt: "Men's denim jacket",
    price: 2499,
    title: "Blue Denim Jacket",
    category: "Jackets",
    stock: 5,
    gender: "Men",
    details: {
      material: "Denim",
      fit: "Regular Fit",
      color: "Blue",
      sizes: ["L", "XL"],
      care: "Dry clean only",
      delivery: "Free delivery within 3-5 business days.",
    },
  },
  {
    img: "//example.com/men4.jpg",
    desc: "Soft and durable sneakers, perfect for daily use.",
    alt: "Men's black sneakers",
    price: 1999,
    title: "Black Casual Sneakers",
    category: "Footwear",
    stock: 8,
    gender: "Men",
    details: {
      material: "Synthetic",
      fit: "True to size",
      color: "Black",
      sizes: ["42", "43", "44"],
      care: "Wipe with a damp cloth",
      delivery: "Free delivery within 7-10 business days.",
    },
  },
  {
    img: "//example.com/women1.jpg",
    desc: "Elegant floral printed summer dress with a relaxed fit.",
    alt: "Women's floral dress",
    price: 1799,
    title: "Floral Summer Dress",
    category: "Dresses",
    stock: 12,
    gender: "Women",
    details: {
      material: "Chiffon",
      fit: "Loose Fit",
      color: "Floral",
      sizes: ["S", "M", "L"],
      care: "Hand wash cold",
      delivery: "Free delivery within 5-7 business days.",
    },
  },
  {
    img: "//example.com/women2.jpg",
    desc: "Soft cashmere sweater ideal for cold weather.",
    alt: "Women's pink sweater",
    price: 2999,
    title: "Pink Cashmere Sweater",
    category: "Sweaters",
    stock: 7,
    gender: "Women",
    details: {
      material: "Cashmere",
      fit: "Regular Fit",
      color: "Pink",
      sizes: ["M", "L"],
      care: "Dry clean only",
      delivery: "Free delivery within 3-5 business days.",
    },
  },
  {
    img: "//example.com/women3.jpg",
    desc: "High-waisted denim jeans with a classic straight-leg fit.",
    alt: "Women's blue jeans",
    price: 1399,
    title: "Blue High-Waisted Jeans",
    category: "Jeans",
    stock: 20,
    gender: "Women",
    details: {
      material: "Denim",
      fit: "Straight Fit",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      care: "Machine wash warm with like colors",
      delivery: "Free delivery within 5-7 business days.",
    },
  },
  {
    img: "//example.com/women4.jpg",
    desc: "Comfortable and stylish sneakers, perfect for everyday use.",
    alt: "Women's white sneakers",
    price: 2299,
    title: "White Casual Sneakers",
    category: "Footwear",
    stock: 9,
    gender: "Women",
    details: {
      material: "Synthetic",
      fit: "True to size",
      color: "White",
      sizes: ["38", "39", "40"],
      care: "Wipe with a damp cloth",
      delivery: "Free delivery within 7-10 business days.",
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
