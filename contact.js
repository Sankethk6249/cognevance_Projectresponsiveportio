const mongoose = require("mongoose");

// One document per message sent from the contact form
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2,
    maxlength: 80,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    maxlength: 120,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    minlength: 10,
    maxlength: 2000,
  },