require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get("/health-checkup", (req, res) => {
	const username = req.headers.username
	const password = req.headers.password
	const totalKidney = req.query.totalKidney

	if (username === "Test" && password === "test123") {
		if (totalKidney == 1 || totalKidney == 2) {
			res.send("Your kidney is healthy")
		} else {
			res.status(400).json({
				msg: "Wrong kidney input. Input 1 or 2."
			})
		}
	} else {
		res.status(411).json({
			msg: "Invalid username or password"
		})
	}
})

app.post("/", (req, res) => {})

app.put("/", (req, res) => {})

app.delete("/", (req, res) => {})

app.listen(PORT, () => {
	console.log(`The 2024 server is listening at ${PORT}`)
})
