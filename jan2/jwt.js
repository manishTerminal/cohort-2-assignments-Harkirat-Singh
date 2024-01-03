require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 4000

const jwtpassword = "password123"

const app = express()


//its for middleware. Here its used to read body 
app.use(express.json())

const Users = [
	{ username: "manish", password: "test1" },
	{ username: "rahul", password: "test2" },
	{ username: "rishu", password: "test3" },
	{ username: "guria", password: "test4" }
]

function userExists(username, password) {
    let userExist = false;
    for(let i=0; i<Users.length; i++){
        if(Users[i].username == username && password == password){
            userExist = true
        }
    }
    return userExist
}

//return a JSON web token with username encrypted
app.post("/signin", (req, res) => {
	const username = req.body.username
	const password = req.body.password

	if (!userExists(username, password)) {
		return res.json({
			msg: " User doesn't exists in the database"
		})
	}

	var token = jwt.sign({ username: username }, jwtpassword)
	return res.json({
		token
	})
})

//Header - Authorization header
//Return an array of all users if user is signed in(token is correct)
//Returns 403 status code if not
app.get("/users", (req, res) => {
	const token = req.headers.authorization
	const decode = jwt.verify(token, jwtpassword)

    const username = decode.username

    const data = Users.filter((user)=>{
        if(user.username == username){
            return false
        } else {
            return true
        }
    })

	return res.json({
		data
	})
})

app.listen(PORT, () => {
	console.log(`The server is running at ${PORT}`)
})
