// Portfolio backend: Express + MongoDB (Mongoose)
require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ----- Security headers -----
// CSP is off so Google Fonts load when this server also serves the frontend locally.
app.use(helmet({ contentSecurityPolicy: false }));

// ----- CORS -----
// CLIENT_ORIGIN can hold several origins separated by commas.
// Leave it empty in development to allow any origin.
const allowedOrigins = (process.env.CLIENT_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);
