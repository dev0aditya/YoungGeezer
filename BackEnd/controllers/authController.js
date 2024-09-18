const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendRegistrationEmail } = require("../services/emailService");

exports.register = async (req, res) => {
  const { phone, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      phone,
      email,
      password: hashedPassword,
    });
    try {
      sendRegistrationEmail(email);
      console.log("registraition mail sent to: ", email);
    } catch (error) {
      console.error("Error sending registraton email: ", error.message);
    }
    res.status(200).json({
      phone: newUser.phone,
      email: newUser.email,
      id: newUser._id,
      role: newUser.role,
    });
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
