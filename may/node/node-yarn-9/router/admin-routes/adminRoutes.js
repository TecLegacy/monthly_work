const express = require('express');
const router = express.Router();

const {
  getProduct,
  getAdminProducts,
} = require('../../controller/admin-controller/index');

router.get('/', getProduct);
// router.get('/admin-products', getAdminProducts);

module.exports = router;
