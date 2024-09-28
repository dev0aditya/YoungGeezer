const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
