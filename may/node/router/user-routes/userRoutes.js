const express = require('express');
const router = express.Router();

const { getShop, postShop } = require('../../controller/shop-controller/index');

router.get('/', getShop);

router.post('/', postShop);

module.exports = router;
