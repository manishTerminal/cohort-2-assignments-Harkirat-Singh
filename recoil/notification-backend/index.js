require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.get("/notification", (req, res) => {
	res.json({
		Notification: Math.floor(Math.random() * 10 + 1),
		Message: Math.floor(Math.random() * 40 + 1),
		Connection: Math.floor(Math.random() * 200 + 1)
	});
});

app.listen(PORT, () => {
	console.log(`server is listening at ${PORT}`);
});
