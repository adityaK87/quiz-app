require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const app = express();

app.use((req, res) => {
	console.log("Welcome to Express");
});

connectDB().then(() => {
	app.listen(process.env.PORT_NUMBER, () => {
		console.log("listening on port " + process.env.PORT_NUMBER);
	});
});
