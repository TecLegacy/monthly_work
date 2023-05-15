// @Path - /user
// @method - GET
// @Accessible ALL
const getShop = (req, res, next) => {
  res.render('shop/index.ejs', {
    title: 'Shopping',
    heading: 'Shop page 🛒',
    path: 'Shop',
  });
};

// @Path - /post
// @method - POST
// @Accessible ALL
const postShop = (req, res, next) => {
  res.render('shop/index.ejs', {
    title: 'Shopping',
    heading: 'Shop page 🛒',
    path: 'Shop',
  });
};

module.exports = { getShop, postShop };
