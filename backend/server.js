require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const tripUsers = require("./router/tripUsers");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

app.use("/api", tripUsers);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
