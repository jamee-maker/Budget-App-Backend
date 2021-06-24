// Dependencies
const express = require("express");
const transactionsController = require("./controllers/transactionsController");
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Budget App back-end</h1>`);
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
