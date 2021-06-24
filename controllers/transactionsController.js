// Dependencies
const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactionsData");

// Routes
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.post("/create", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.get("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  if (arrayIndex < transactionsArray.length) {
    res.json(transactionsArray[arrayIndex]);
  } else {
    res.redirect("/not-found");
  }
});

transactions.delete("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  const deletedTransaction = transactionsArray.splice(arrayIndex, 1);
  if (arrayIndex < transactionsArray.length) {
    res.status(200).json(deletedTransaction);
  } else {
    res.redirect("/not-found");
  }
});

transactions.put("/:arrayIndex", (req, res) => {
  transactionsArray[Number(req.params.arrayIndex)] = req.body;
  if (arrayIndex < transactionsArray.length) {
    res.status(200).json(transactionsArray[Number(req.params.arrayIndex)]);
  } else {
    res.redirect("/not-found");
  }
});

// Export
module.exports = transactions;
