const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/add-to-cart", authenticateToken, cartController.addToCart);
router.post("/add-to-bag", authenticateToken, cartController.addToBag);
router.post("/move-to-bag", authenticateToken, cartController.moveToBag);
router.get("/view-bag", authenticateToken, cartController.viewBag);
router.get("/view-cart", authenticateToken, cartController.viewCart);

module.exports = router;
