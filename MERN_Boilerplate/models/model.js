const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is just an example Schema for an object where are calling Model
// This was previously a Book schema 

const somethingSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Model = mongoose.model("Model", somethingSchema);

module.exports = Model;
