const Sailor = require("../models/sailorModel");

exports.createSailor = async (req, res) => {
  const name = req.body.name;

  if (name && name.length > 50) {
    return res.status(422).json({
      status: "error",
      message: "Merci de raccourcir le nom à moins de 50 caractères.",
    });
  }

  const newSailor = await Sailor.create({ name });

  res.status(201).json({
    status: "success",
    data: {
      sailor: newSailor,
    },
  });
};
