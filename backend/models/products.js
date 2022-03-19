const Joi = require("joi");
const mongoose = require("mongoose");

/** BLUEPRINT OF CUSTOMER
 *
 * Definining and validating a customer */
const customerSchema = mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  phone: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
});

const Customer = mongoose.model("customers", customerSchema);

const validateInput = (input) => {
  const schema = {
    name: Joi.string().min(2).max(20).required(),
    phone: Joi.string().min(2).max(20).required(),
    isGold: Joi.boolean(),
  };
  return Joi.validate(input, schema);
};

exports.Customer = Customer;
exports.validateInput = validateInput;
