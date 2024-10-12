require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json()); //body parser middleware

app.use("/api/auth", authRoutes);

connectDB().then(() => {
	app.listen(process.env.PORT_NUMBER, () => {
		console.log("listening on port " + process.env.PORT_NUMBER);
	});
});
