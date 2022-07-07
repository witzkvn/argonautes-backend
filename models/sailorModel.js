const mongoose = require("mongoose");

const sailorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
});

const Sailor = mongoose.model("Sailor", sailorSchema);

module.exports = Sailor;
