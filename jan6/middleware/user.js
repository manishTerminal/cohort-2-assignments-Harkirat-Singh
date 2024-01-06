const jwt = require("jsonwebtoken");
const { SECRET_PASS } = require("../config/jwt");
const { User } = require("../db");
const { use } = require("../routes/admin");

async function userMiddleware(req, res, next) {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

	const authorization = req.headers.authorization;

	const tokenArray = authorization.split(" ");

	const token = tokenArray[1];

	const decode = jwt.verify(token, SECRET_PASS);

	console.log(decode);

	const userExist = await User.findOne({ username: decode.username });

	if (userExist) {
		req.username = decode.username;
		next();
	} else {
		return res.json({
			msg: "The token is incorrect"
		});
	}
}

module.exports = userMiddleware;
