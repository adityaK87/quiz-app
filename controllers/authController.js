const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
	const { userName, email, password } = req.body;
	try {
		let user = await User.findOne({ email: email });
		if (user) {
			res.status(201).json({
				message: "User already exists",
			});
		}

		//Encrypting the password
		const hashedPassword = await bcrypt.hash(password, 5);
		user = new User({
			userName: userName,
			email: email,
			password: hashedPassword,
		});

		await user.save();
		res.status(200).json({
			message: "User registered successfully",
		});
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username });
		if (!user)
			return res.status(400).json({ message: "Invalid credentials" });

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			res.status(400).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
		res.status(200).json({
			token: token,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = {
	register,
	login,
};
