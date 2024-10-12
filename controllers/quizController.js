// create quiz
const Quiz = require("../models/quizModel");

// create quizzes
const createQuiz = async (req, res) => {
	const { title, questions } = req.body;
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

//get quizzes
const getQuizzes = async (req, res) => {
	try {
		const quizzes = await Quiz.find();
		res.status(200).json(quizzes);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

// Get quiz details by ID
const getQuizDetails = async (req, res) => {
	const quizID = req.params.id;
	try {
		const quiz = await Quiz.findById(quizID);
		if (!quiz) return res.status(404).json({ message: "Quiz not found" });

		res.status(200).json(quiz);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

// Take a quiz
const takeQuiz = async (req, res) => {
	const { answers } = req.body; // Array of selected answer indices
	const quizId = req.params.id;

	try {
		const quiz = await Quiz.findById(quizId);
		if (!quiz) return res.status(404).json({ message: "Quiz not found" });

		let score = 0;
		quiz.questions.forEach((question, index) => {
			if (question.correctAnswer === answers[index]) {
				score++;
			}
		});

		res.status(200).json({ score, total: quiz.questions.length });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = {
	createQuiz,
	getQuizzes,
	getQuizDetails,
	takeQuiz,
};
