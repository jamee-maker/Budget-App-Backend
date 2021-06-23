// Dependencies
const express = require("express");

// Configuration
const app = express();

// Middleware

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Budget App back-end</h1>`);
});

// Export
module.exports = app;
