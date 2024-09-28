const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("id/:productId", productController.getProductById);
router.get("/men", productController.getMenProducts);
router.get("/women", productController.getWomenProducts);

module.exports = router;
