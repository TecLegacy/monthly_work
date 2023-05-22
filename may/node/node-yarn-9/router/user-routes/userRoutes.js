const express = require('express');
const router = express.Router();

const { getShop, postShop } = require('../../controller/shop-controller/index');

router.get('/', getShop);

router.post('/', postShop);
router.get('/cart', (req, res) => {
  res.render('shop/index.ejs', {
    title: 'mana',
    path: 'Shop',
    heading: 'fuk you',
  });
});

module.exports = router;
