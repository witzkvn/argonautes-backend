const dotenv = require("dotenv");
const mongoose = require("mongoose");

// pour les exceptions
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception. Shutting down...");
  console.log(err.name, err.message);
  process.exit(1); // fermer toute l'app
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() =>
    console.log("Connection with DB done. Listening for requests...")
  );

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// pour les promesses rejetées
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection. Shutting down...");
  console.log(err.name, err.messager);
  server.close(() => {
    // fermer serveur pour finir les requêtes en cours
    process.exit(1); // fermer toute l'app
  });
});

// termination signal
process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Shutting down...");
  server.close(() => {
    // fermer serveur pour finir les requêtes en cours
    console.log("Process terminated!");
    process.exit(1); // fermer toute l'app
  });
});
