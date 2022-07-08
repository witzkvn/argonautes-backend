const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const sailorRouter = require("./routes/sailorRoutes");

const app = express();

// Securité
app.use(helmet({ contentSecurityPolicy: false }));
app.use(mongoSanitize());
app.use(xss());
app.use(
  cors({
    origin: "https://argonautes-wcs-front.herokuapp.com",
  })
);

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
