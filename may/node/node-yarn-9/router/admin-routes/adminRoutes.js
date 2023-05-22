const express = require("express");
const router = express.Router();

const {
  getProduct,
  getAdminProducts,
} = require("../../controller/admin-controller/index");

router.get("/add-product", getProduct);
router.get("/admin-products", getAdminProducts);

module.exports = router;
