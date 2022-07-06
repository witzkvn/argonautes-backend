const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/", function (req, res) {
  res.send("Welcome on the Argonautes API !");
});

module.exports = app;
