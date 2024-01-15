require("dotenv").config;
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	phoneNumber: Number,
	// dob: Date,
	email: String,
	password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
