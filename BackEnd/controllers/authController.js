const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  sendRegistrationEmail,
  sendOtpEmail,
} = require("../services/emailService");

exports.register = async (req, res) => {
  const { phone, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //generate otp
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpExpiresAt = Date.now() + 5 * 60 * 1000;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      phone,
      email,
      password: hashedPassword,
      otp: otp,
      otpExpiresAt: otpExpiresAt,
    });

    sendOtpEmail(email, otp);

    res
      .status(200)
      .json({ message: "OTP sent. Please verify to complete registration" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (user.otp !== otp || user.otpExpiresAt < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP!" });
    }

    sendRegistrationEmail(email);

    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();
    res
      .status(200)
      .json({ message: "OTP verfied and user registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { phone, email, password } = req.body;
  try {
    const user = await User.findOne({ $or: [{ email }, { phone }] });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
