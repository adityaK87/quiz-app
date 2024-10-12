const jwt = require("jsonwebtoken");

const isUserAuthenticated = (req, res, next) => {
	const token = req.headers.token;
	if (!token) return res.status(401).json({ message: "Access Denied" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400).json({
			message: "Invalid token",
			error: error.message,
		});
	}
};

module.exports = isUserAuthenticated;
