require("dotenv").config();
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);

	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "You send the wrong input"
		});
		return;
	}

	await todo.create({
		title: createPayload.title,
		description: createPayload.description,
		completed: false
	});

	res.json({
		msg: "todo created"
	});
});

app.get("/todos", async (req, res) => {
	const todoList = await todo.find({});
	return res.json({
		todoList
	});
});

app.put("/completed", async (req, res) => {
	const updatePayload = req.body;
	const parsedPayload = updateTodo.safeParse(updatePayload);

	if (!parsedPayload.success) {
		return res.status(411).json({
			msg: "You send the wrong input"
		});
	}

	await todo.update(
		{
			_id: req.body.id
		},
		{
			completed: true
		}
	);

	res.json({
		msg: "todo mark is done."
	});
});

app.listen(PORT, () => {
	console.log(`The todo server is listening at ${PORT}`);
});
