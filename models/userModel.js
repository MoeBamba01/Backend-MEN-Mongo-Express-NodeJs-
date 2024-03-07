const mongoose = require("mongoose");

//--------------------------------création de notre modèle---------------------------
const userSchema = new mongoose.Schema({
  Name: { type: "string", require: true },
  Address: { type: "string", require: true },
  Phone: { type: Number, require: true },
});

//----------------------------exportation du modéle-------------------------------------
module.exports = mongoose.model("Users", userSchema)