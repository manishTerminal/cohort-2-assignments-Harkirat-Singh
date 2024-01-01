require("dotenv").config()
const express = require("express")
const zod = require("zod")
const app = express()
const PORT = process.env.PORT || 2000

const schema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
	phoneNumber: zod.number().min(10),
	gender: zod.string()
})

app.use(express.json())

function signUpMiddleware(req, res, next) {
	const email = req.body.email
	const password = req.body.password
	const phoneNumber = req.body.phoneNumber
	const gender = req.body.gender

	const response = schema.safeParse({
		email: email,
		password: password,
		phoneNumber: phoneNumber,
		gender: gender
	})

    res.send(response)
	next()
}

app.get("/signup", signUpMiddleware, (req, res) => {
	if (!response.success) {
		res.json({
            msg: "Successfully account created"
        })
	} else {
		res.send("Invalid details")
	}
})

app.listen(PORT, () => {
	console.log(`The server is listening at ${PORT}`)
})
