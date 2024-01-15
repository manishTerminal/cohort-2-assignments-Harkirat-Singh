require("dotenv").config();
const express = require("express");
const user = require("./database/db");
const app = express();
const zod = require("zod");
const cors = require("cors");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const zodSchema = zod.object({
	firstName: zod.string(),
	lastName: zod.string(),
	phoneNumber: zod.number(),
	// dob: zod.date(),
	email: zod.string(),
	password: zod.string()
});

app.get("/", (req, res) => {
	res.send("<h1>home route</h1>");
});

app.post("/signup", async (req, res) => {
	try {
		const payload = req.body;
		const parsePayload = zodSchema.safeParse(payload);
		console.log(parsePayload);
		if (parsePayload.success) {
			await user.create(payload);
			res.json({
				msg: "The user is successfully created."
			});
		} else {
			res.json({
				msg: "Enter the valid details."
			});
		}
	} catch (e) {
		console.log(e);
	}
});

app.listen(PORT, () => {
	console.log(`The server is listening at ${PORT}`);
});
