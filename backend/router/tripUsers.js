require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Trip = require("../models/Trip");
const Place = require("../models/Place");
const seed = require("../models/Seed.js");
const auth = require("../middleware/auth");
const { db } = require("../models/Place");

// login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, user.hash);
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
      jwtid: uuidv4(),
    });

    const response = { access };

    res.json(response);
  } catch (error) {
    console.log("POST /login", error);
    res.status(400).json({ status: "error", message: "login failed" });
  }
});

// signup route
router.put(
  "/signup",
  [
    check("email", "email has to be valid").isEmail(),
    check(
      "password",
      "password has to be 8 to 24 characters, and must include uppercase and lowercase letters, a number and at least one of the following special characters: !@#$%"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/),
    check("username", "username is required").not().isEmpty(),
    check("firstName", "First name is required").not().isEmpty(),
    check("age", "Age is required").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "error", error: errors.array() });
    }
    try {
      const userEmail = await User.findOne({ email: req.body.email });
      if (userEmail) {
        return res
          .status(400)
          .json({ status: "error", message: "duplicate email" });
      }

      const userUsername = await User.findOne({ username: req.body.username });
      if (userUsername) {
        return res
          .status(400)
          .json({ status: "error", message: "duplicate username" });
      }

      const hash = await bcrypt.hash(req.body.password, 12);
      const createdUser = await User.create({
        email: req.body.email,
        hash,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName || "",
        age: req.body.age,
        gender: req.body.gender || "",
      });

      console.log("created user: ", createdUser);
      res.json({ status: "ok", message: "user created" });
    } catch (error) {
      console.log("PUT /signup", error);
      res
        .status(409)
        .json({ status: "error", message: "an error has occured" });
    }
  }
);

//try catch this
// account page, user info route
router.post("/account", auth, async (req, res) => {
  try {
    const user = await User.find({ email: req.decoded.email }).select(
      "username firstName age email"
    );
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/user/trips", auth, async (req, res) => {
  try {
    const tripId = req.body._id;
    const email = req.decoded.email;
    await User.updateOne({ email: email }, { $push: { trips: tripId } });
    res.json(User.find({ email: email }).select("username trips"));
  } catch (error) {
    console.log(error.message);
  }
});

//fig this after
// logout route
router.get("/logout", auth, async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ status: "ok", message: "logged out" });
});

//try catch this
// home page user first name route
router.post("/home", auth, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.decoded.email }).select(
      "username trips"
    );
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

//try catch this
// home page, display trips route
router.post("/home/trips", auth, async (req, res) => {
  try {
    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

//try catch this
// search results page, get trips to see whether place is in trip already or not
router.post("/searchresults", auth, async (req, res) => {
  try {
    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

// search results page, add place to trip route
router.patch("/searchresults", auth, async (req, res) => {
  try {
    await Trip.updateOne(
      { _id: req.body._id },
      { $push: { places: req.body.place } },
      { new: true }
    );

    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

// trips page, display trips route (same as line 103)
router.post("/trips", auth, async (req, res) => {
  try {
    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

// trips page, create trip route
router.put("/trips", auth, async (req, res) => {
  try {
    await Trip.create({
      ownerEmail: req.decoded.email,
      tripName: req.body.tripName,
      places: [],
    });

    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

// delete trip route
router.delete("/trips", auth, async (req, res) => {
  try {
    const { _id } = req.body;

    await Trip.deleteOne({ _id });

    const trips = await Trip.find({ ownerEmail: req.decoded.email });
    res.json(trips);
  } catch (error) {
    console.log(error.message);
  }
});

// individual trip page, edit trip name route
router.patch("/trip/editname", auth, async (req, res) => {
  try {
    const response = await Trip.updateOne(
      {
        _id: req.body._id,
      },
      {
        tripName: req.body.tripName,
      },
      { new: true }
    );
    console.log(response);

    const trip = await Trip.find({ _id: req.body._id });
    res.json(trip);
  } catch (error) {
    console.log(error.message);
  }
});

// individual trip page, delete place route
router.patch("/trip/deleteplace", auth, async (req, res) => {
  try {
    await Trip.updateOne(
      { _id: req.body._id },
      { $pull: { places: { xid: req.body.xid } } },
      { new: true }
    );

    const trip = await Trip.find({ _id: req.body._id });
    res.json(trip);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/seedplaces", async (req, res) => {
  try {
    const seedItems = await Place.create(seed);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

// display places of a city
router.post("/city/places", async (req, res) => {
  try {
    const places = await Place.find({ city: req.body.city });
    res.json(places);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

// api/city/places => body (city)
