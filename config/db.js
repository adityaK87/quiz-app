const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
		console.log("Connected to Mongo");
	} catch (error) {
		console.log("Error connecting : " + error.message);
	}
};

module.exports = connectDB;
