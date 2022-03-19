const { Customer, validateInput } = require("../models/customers");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/* CRUD API */
router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name").lean();
  res.send(customers);
});

router.post("/", async (req, res) => {
  // validate input
  const { error } = validateInput(req.body);
  if (error) return res.status(404).send(error);
  //db
  let customer = Customer({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone,
  });
  try {
    customer = await customer.save(customer);
  } catch (err) {
    console.error("Error in saving customer: ", err);
  }
  //send to client
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  const { error } = validateInput(req.body);
  if (error) return res.status(404).send(error);
  //db
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    },
    { new: true }
  );
  if (!customer) return res.status(404).send("Cannot find customer with id");
  // send to client
  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer) return res.status(404).send("Cannot find customer with id");
  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id).lean();
  if (!customer) return res.status(404).send("Cannot find customer with id");
  res.send(customer);
});

module.exports = router;
