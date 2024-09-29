const express = require("express");
const { register, login, verifyOtp } = require("../controllers/authController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
//router.post("/cart",authenticateToken, cartController);

module.exports = router;
