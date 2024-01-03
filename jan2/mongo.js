require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 4000

mongoose.connect(
	"mongodb+srv://admin:11299Manish@cluster0.w1sglbo.mongodb.net/zetomart"
)

const User = mongoose.model("Users", {
	name: String,
	email: String,
	password: String
})

const user = new User({
	name: "Manish Kumar",
	email: "mkr.talk@gmail,com",
	password: "test123456"
})

user.save()
