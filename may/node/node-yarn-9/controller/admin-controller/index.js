// @Path - /admin/add-product
// @method - GET
// @Accessible ALL

const getProduct = (req, res) => {
  res.render('admin/add-product.ejs', {
    path: 'Add Product',
    title: 'Add Product 🛍',
  });
};

// @Path - /admin/admin-products
// @method - GET
// @Accessible ALL
const getAdminProducts = (req, res) => {
  res.render('admin/admin-products.ejs', {
    path: 'Admin Products',
    title: 'Admin Products 🎫',
  });
};

module.exports = { getProduct, getAdminProducts };
