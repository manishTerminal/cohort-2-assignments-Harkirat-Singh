require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "jwt123";

const PORT = process.env.PORT || 5000;
const app = express();

//create schema for zod
const schema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(10),
	firstName: zod.string(),
	lastName: zod.string(),
	age: zod.number(),
	dob: zod.string()
});

mongoose.connect(
	"mongodb+srv://admin:11299Manish@cluster0.w1sglbo.mongodb.net/Todo"
);

app.use(express.json());

const user = mongoose.model("Users", {
	email: String,
	password: String,
	firstName: String,
	lastName: String,
	age: Number,
	dob: Date
});

//post the data from client to database.
app.post("/signup", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const age = req.body.age;
	const dob = req.body.dob;

	const response = schema.safeParse({
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
		age: age,
		dob: dob
	});

	if (!response.success) {
		return res.send("Please enter valid data.");
	}

	const userExist = await user.findOne({ email: email });

	if (!userExist) {
		await user.create({ email, password, firstName, lastName, age, dob });

		return res.send("The data is inserted into database.");
	} else {
		return res.send("User already exists.");
	}
});

//signin the user if email and password is correct and return jwttoken
//else tell them to create a new account
app.get("/signin", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const token = jwt.sign({ email: email }, jwtPassword);

	const userExist = await user.findOne({ email: email, password: password });

	if (userExist) {
		res.json({ token, msg: "You are successfully signed in." });
	} else {
		res.send("The email is not registered. Create an account.");
	}
});

//if user is signedIn then send him some data about himself eg-dob, age from database
app.get("/user", async (req, res) => {
	const token = req.headers.authorization;

	try {
		const decode = jwt.verify(token, jwtPassword);

		const email = decode.email;
		const userExist = await user.findOne({ email: email });
		if (!userExist) {
			return res.status(404).send("The user dont exist");
		}

		const userData = {
			age: userExist.age,
			dob: userExist.dob
		};

		return res.json({ msg: "User signed by token verification", userData });
	} catch (err) {
		res.send("Some error in verification");
	}
});

app.use((err, req, res, next) => {
	res.send("Error in post route of server");
});

app.listen(PORT, () => {
	console.log(`The server is listening at ${PORT}`);
});
