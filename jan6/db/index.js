const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
	"mongodb+srv://admin:11299Manish@cluster0.w1sglbo.mongodb.net/udemy-mars"
);

// Define 
const AdminSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String
});

const UserSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String,
	course: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course"
		}
	]
});

const CourseSchema = new mongoose.Schema({
	// Schema definition here
	title: String,
	description: String,
	price: Number,
	imageLink: String,
	published: Boolean
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
	Admin,
	User,
	Course
};
