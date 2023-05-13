// @Path - /user
// @method - GET
// @Accessible ALL
const getShop = (req, res, next) => {
  res.render('shop/index.ejs', {
    title: 'Shopping',
    heading: 'Shop page 🛒',
  });
};

// @Path - /post
// @method - POST
// @Accessible ALL
const postShop = (req, res, next) => {
  res.render('shop/index.ejs', {
    title: 'Shopping',
    heading: 'Shop page 🛒',
  });
};

module.exports = { getShop, postShop };
