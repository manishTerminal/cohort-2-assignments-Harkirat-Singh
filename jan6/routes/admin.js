const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const {SECRET_PASS} = require("../config/jwt")

// Admin Routes
router.post("/signup", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	try {
		const adminData = await Admin.create({
			username,
			password
		});

		return res.json({
			msg: "Admin created successfully."
		});
	} catch (err) {
		console.error(err);

		return res.json({
			msg: "Admin not created."
		});
	}
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic

	const username = req.body.username;
	const password = req.body.password;

	const adminExist = await Admin.findOne({
		username: username,
		password: password
	});

	if (adminExist) {
		const token = `Bearer ${jwt.sign({ username }, SECRET_PASS)}`;
		return res.json({
			token
		});
	} else {
		return res.json({
			msg: "user does not exist."
		});
	}
});

router.post("/courses", adminMiddleware, async (req, res) => {
	// Implement course creation logic
	try {
		const title = req.body.title;
		const description = req.body.description;
		const price = req.body.price;
		const imageLink = req.body.imageLink;

		const course = await Course.create({
			title,
			description,
			price,
			imageLink
		});

		return res.json({
			msg: "Course created successfully.",
			courseId: course._id
		});
	} catch (e) {
		console.error(e);
		return res.json({
			msg: "Course not created."
		});
	}
});

router.get("/courses", adminMiddleware, async (req, res) => {
	// Implement fetching all courses logic
	const response = await Course.find({})

	return res.json({
		course: response
	})
});

module.exports = router;
