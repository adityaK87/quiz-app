const express = require("express");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
const {
	createQuiz,
	getQuizzes,
	getQuizDetails,
	takeQuiz,
} = require("../controllers/quizController");

const router = express.Router();

router.post("/create", isUserAuthenticated, createQuiz);
router.get("/", getQuizzes);
router.get("/:id", getQuizDetails);
router.post("/:id/take", isUserAuthenticated, takeQuiz);

module.exports = router;
