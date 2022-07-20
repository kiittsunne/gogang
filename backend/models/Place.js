const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    xid: {
      type: String,
      required: true,
      unique: true,
    },
    placeName: {
      type: String,
      required: true,
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
      }
  },
  { timestamps: true },
  { collection: "gogang places" }
);

const Place = mongoose.model("Gogang Place", PlaceSchema);

module.exports = Place;