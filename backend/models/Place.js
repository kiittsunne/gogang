const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    placeName: {
      type: String,
      required: true,
      unique: true,
    },
    kinds: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  { collection: "gogang places" }
);

const Place = mongoose.model("Gogang Place", PlaceSchema);

module.exports = Place;
