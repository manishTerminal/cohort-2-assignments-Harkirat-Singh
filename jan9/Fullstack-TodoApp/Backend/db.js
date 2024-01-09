const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:11299Manish@cluster0.w1sglbo.mongodb.net/demotodo"
);

const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
	todo
};
