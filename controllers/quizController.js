// create quiz
const Quiz = require("../models/quizModel");

const createQuiz = async (req, res) => {
	const { title, questions } = req.body;
	console.log(req.user);

	try {
		const quiz = new Quiz({
			title,
			questions,
			createdBy: req.user.id,
		});

		await quiz.save();
		res.status(201).json(quiz);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = {
	createQuiz,
};
