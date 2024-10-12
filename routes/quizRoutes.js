const express = require("express");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
const { createQuiz } = require("../controllers/quizController");

const router = express.Router();

router.post("/create", isUserAuthenticated, createQuiz);

module.exports = router;
