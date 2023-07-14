const fs = require("fs");
const path = require("path");

const root = path.dirname(require.main.filename);
const userDataLocation = path.join(__dirname, "../", "data", "user.json");
// const userDataLocation = path.join(root, "data", "user.json");

module.exports = class UserModal {
  constructor(title, price, imageUrl, description) {
    (this.title = title),
      (this.price = price),
      (this.imageUrl = imageUrl),
      (this.description = description);
  }

  save() {
    console.log(userDataLocation, "userlocation");
    fs.writeFile(userDataLocation, JSON.stringify([{ helo: "w" }]), (error) => {
      console.error(error);
    });
  }
};
