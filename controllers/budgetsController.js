// Dependencies
const express = require("express");
const budgets = express.Router();
const budgetArray = require("../models/budgetData");

// Routes
budgets.get("/", (req, res) => {
  res.json(budgetArray);
});

budgets.post("/create", (req, res) => {
  budgetArray.push(req.body);
  res.json(budgetArray[budgetArray.length - 1]);
});

budgets.get("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  if (arrayIndex < budgetArray.length) {
    res.json(budgetArray[arrayIndex]);
  } else {
    res.redirect("/not-found");
  }
});

budgets.delete("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  const deletedBudget = budgetArray.splice(arrayIndex, 1);
  if (arrayIndex < budgetArray.length) {
    res.status(200).json(deletedBudget);
  } else {
    res.redirect("/not-found");
  }
});

budgets.put("/:arrayIndex", (req, res) => {
  budgetArray[Number(req.params.arrayIndex)] = req.body;
  if (arrayIndex < budgetArray.length) {
    res.status(200).json(budgetArray[Number(req.params.arrayIndex)]);
  } else {
    res.redirect("/not-found");
  }
});

// Export
module.exports = budgets;
