const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: { type: String, required: true },
  desc: { type: String, required: true },
  alt: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  gender: { type: String, required: true },
  details: {
    material: String,
    fit: String,
    color: String,
    sizes: [String],
    care: String,
    delivery: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
