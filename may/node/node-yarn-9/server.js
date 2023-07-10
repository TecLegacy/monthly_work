const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const colors = require("colors");
require("module-alias/register");

// .env file handle
require("dotenv").config();
const port = process.env.PORT || 3001;

// Root directory
const root = require("./utils/parentDirectory");

// Template Engine
app.set("view engine", "ejs ");
app.set("views", path.join(root, "views"));

// Server file statically
app.use(express.static(path.join(root, "public")));

// BodyParser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Middleware
app.use((err, req, res, next) => {
  next();
  console.log("hitting first middleware");
  throw new Error(err.stack);
});

//Admin-Route
app.use("/admin", require("./router/admin-routes/adminRoutes"));

// User-Route
// app.use("/shop", require("@root/router/user-routes/userRoutes"));
app.use("/shop", require("@userRoutes/userRoutes"));

// Home-page
app.get("/", (req, res) => {
  res.render("home/index.ejs", {
    title: "Home Page",
    heading: "Hello From EJS 🙋‍♂️",
    path: "Home",
  });
});

// Page-Not-Found!
app.use((req, res, next) => {
  res.render("404.ejs", {
    title: "Error Page",
    heading: "Page Not Found! 🙀",
  });
});

app.listen(port, () => {
  console.log(`Server Started at port ${process.env.PORT}`.underline.cyan);
});
