require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 2000;

app.use(cors());

//take principal, rate and time as input
//calculate interest and total
app.get("/interest", (req, res) => {
	const principal = parseFloat(req.query.principal);
	const rate = parseFloat(req.query.rate);
	const time = parseFloat(req.query.time);

	const interest = (principal * rate * time) / 100;

	const total = principal + interest;

	res.json({
		total: total,
		interest: interest
	});
});

app.listen(PORT, () => {
	console.log(`The interest server is running at ${PORT}`);
});
