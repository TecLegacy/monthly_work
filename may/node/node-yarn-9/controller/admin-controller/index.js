const userModal = require("../../model/userModel");

// @Path - /admin/add-product
// @method - GET
// @Accessible ALL

const getProduct = (req, res) => {
  res.render("admin/add-product.ejs", {
    path: "Add Product",
    title: "Add Product 🛍",
  });
};

// @Path - /admin/admin-products
// @method - GET
// @Accessible ALL
const getAdminProducts = (req, res) => {
  res.render("admin/admin-products.ejs", {
    path: "Admin Products",
    title: "Admin Products 🎫",
  });
};

const postProduct = (req, res) => {
  console.log("title", req.body);
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;
  const price = req.body.price;

  const UserModal = new userModal(title, image, description, price);
  UserModal.save();

  res.redirect("/");
};

module.exports = { getProduct, getAdminProducts, postProduct };
