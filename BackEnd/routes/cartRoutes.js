const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/add-to-cart", authenticateToken, cartController.addToCart);
router.get("/view-cart", authenticateToken, cartController.viewCart);

module.exports = router;
