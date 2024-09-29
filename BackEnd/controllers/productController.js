const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenProducts = async (req, res) => {
  try {
    const menProducts = await Product.find({ gender: "Men" });
    res.status(200).json(menProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWomenProducts = async (req, res) => {
  try {
    const womenProducts = await Product.find({ gender: "Women" });
    res.status(200).json(womenProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
