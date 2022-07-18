const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
  {
    uniqueID: {
      type: String,
      required: true,
      unique: true,
    },
    ownerEmail: {
      type: String,
      required: true,
    },
    tripName: {
      type: String,
      required: true,
    },
    places: [
      {
        xid: String,
        placeName: String,
        kinds: String,
        image: String,
        description: String,
      },
    ],
  },
  { timestamps: true },
  { collection: "gogang trips" }
);

const Trip = mongoose.model("Gogang Trip", TripSchema);

module.exports = Trip;
