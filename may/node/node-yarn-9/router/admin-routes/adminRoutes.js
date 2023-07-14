const express = require("express");
const router = express.Router();

const {
  getProduct,
  getAdminProducts,
  postProduct,
} = require("../../controller/admin-controller/index");

router.get("/add-product", getProduct);

router.post("/add-product", postProduct);

router.get("/admin-products", getAdminProducts);

module.exports = router;
