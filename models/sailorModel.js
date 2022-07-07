const mongoose = require("mongoose");

const sailorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Merci de fournir un nom"],
  },
});

const Sailor = mongoose.model("Sailor", sailorSchema);

module.exports = Sailor;
