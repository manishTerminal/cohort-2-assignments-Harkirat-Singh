const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { SECRET_PASS } = require("../config/jwt");

// User Routes
router.post("/signup", async (req, res) => {
	// Implement user signup logic
	const username = req.body.username;
	const password = req.body.password;

	try {
		const userData = await User.create({ username, password });

		return res.json({ msg: "The user is successfully created." });
	} catch (error) {
		console.error(error);
		return res.send("The account is not created");
	}
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	try {
		const userExist = await User.findOne({
			username,
			password
		});

		if (userExist) {
			const token = `Bearer ${jwt.sign({ username }, SECRET_PASS)}`;
			return res.json({
				token
			});
		} else {
			return res.json({
				msg: "wrong username or password"
			});
		}
	} catch (error) {
		console.log(error);
	}
});

router.get("/courses", async (req, res) => {
	// Implement listing all courses logic
	const course = await Course.find({});

	console.log(course);

	const publishedCourse = course.filter((course) => {
		if (course.published === true) {
			return true;
		} else {
			return false;
		}
	});

	if (publishedCourse.length > 0) {
		return res.json({
			publishedCourse
		});
	} else {
		return res.json({
			msg: "No course is published yet"
		});
	}
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.username;

	await User.updateOne(
		{ username: username },
		{
			$push: { course: courseId }
		}
	);

	res.json({
		msg: "The course is purchased"
	});
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	const user = await User.findOne({
		username: req.username
	});

	const courses = await Course.find({
		_id: {
			$in: user.course
		}
	});

	res.json({
		courses: courses
	});
});

module.exports = router;
