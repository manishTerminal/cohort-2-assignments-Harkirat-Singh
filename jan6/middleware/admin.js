const { SECRET_PASS } = require("../config/jwt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../db/index");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
	try {
		const authorization = req.headers.authorization;

		const data = authorization.split(" ");
		const token = data[1];
		const decode = jwt.verify(token, SECRET_PASS);

		const adminExist = await Admin.findOne({
			username: decode.username
		});

		console.log(decode.username);
		if (adminExist) {
			next();
		}
	} catch (e) {
		console.error(e);
		return res.json({
			msg: "wrong token provided."
		});
	}
}

module.exports = adminMiddleware;
