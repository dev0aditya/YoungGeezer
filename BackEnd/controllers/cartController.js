const Cart = require("../models/cart");
const Product = require("../models/product");
const Razorpay = require("razorpay");

// Initialize Razorpay with your key ID and secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//Creating an order for Razorpay payment
exports.createOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, // Razorpay requires amount in paise
      currency: "INR",
      receipt: "order_rcpid_11",
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({
      sucess: true,
      order_id: order.id,
      amount: options.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

exports.addToCart = async (req, res) => {
  console.log("add to cart is hit");
  const { productId, quantity } = req.body;
  const userId = req.user.id; //jwt middleware adds user to req
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }
    const itemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToBag = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
      cart.items[itemIndex].status = "bag"; //update status to bag
    } else {
      cart.items.push({ productId, quantity, status: "bag" }); //add product directly to bag
    }

    await cart.save();
    res.status(200).json({ message: "Item add to bag", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.moveToBag = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );
    if (itemIndex > -1 && cart.items[itemIndex].status === "cart") {
      cart.items[itemIndex].status = "bag";
      await cart.save();
      res.status(200).json({ message: "item moved to bag".cart });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewBag = async (req, res) => {
  const userId = req.user.id;
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Bag is empty" });
    }
    const bagItems = cart.items.filter((item) => item.status === "bag");
    if (bagItems.length === 0) {
      return res.status(404).json({ message: "Bag is empty" });
    }

    const totalPrice = bagItems.reduce((total, item) => {
      const price = item.productId.price * item.quantity;
      return total + price;
    }, 0);
    res.status(200).json({ bagItems, totalPrice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    const cartItems = cart.items.filter((item) => item.status === "cart"); // filter items status by cart

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
