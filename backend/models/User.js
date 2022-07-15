const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        hash: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }
    },
    { collection: "basicusers" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
