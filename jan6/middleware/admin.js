const { SECRET_PASS } = require("../config/jwt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../db/index");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
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
