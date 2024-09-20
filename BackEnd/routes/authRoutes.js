const express = require("express");
const { register, login, verifyOtp } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);

module.exports = router;
