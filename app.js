const express = require("express");
const morgan = require("morgan");
const sailorRouter = require("./routes/sailorRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.use("/api/v1/sailors", sailorRouter);
app.use("/", function (req, res) {
  res.send("Welcome on the Argonautes API !");
});

module.exports = app;
