const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const sailorRouter = require("./routes/sailorRoutes");

const app = express();

app.use(cors());

// Securité
app.use(helmet({ contentSecurityPolicy: false }));
app.use(mongoSanitize());
app.use(xss());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.use("/api/v1/sailors", sailorRouter);
app.use("/", function (req, res) {
  res.send("Welcome on the Argonautes API !");
});

app.all("*", (req) => {
  return res.status(404).json({
    status: "error",
    message: `L'URL ${req.originalUrl} n'a pas été trouvé sur ce serveur... Merci d'essayer un autre URL.`,
  });
});

module.exports = app;
