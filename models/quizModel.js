const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
	question: { type: String, required: true },
	options: [{ type: String, required: true }],
	correctAnswer: { type: Number, required: true }, // Index of correct answer
});

const QuizSchema = new mongoose.Schema({
	title: { type: String, required: true },
	questions: [QuestionSchema],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
