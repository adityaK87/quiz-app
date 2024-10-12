# Online Quiz API

### 📌 Introduction

This is a RESTful API for an online quiz application built with Node.js and Express.js. It supports user authentication (registration and login), quiz management (creating quizzes, viewing quiz details, and taking quizzes), and implements JWT-based authentication and password encryption for security.

### 🚀Features

-   <b>User Authentication:</b> Register and login using JWT (JSON Web Tokens) for secure access.
-   <b>Password Encryption:</b> User passwords are encrypted using bcrypt before being stored in the database.
-   <b>Quiz Management:</b> CRUD operations for quizzes, including adding multiple-choice questions.
-   <b>Taking a Quiz:</b> Users can take quizzes, and their results are calculated based on correct answers.
-   <b>Result Calculation:</b> The user's score is calculated after submitting their quiz answers.

### 👨‍💻Technologies Used

-   <b>Node.js:</b> JavaScript runtime environment.
-   <b>Express.js:</b> Web framework for Node.js.
-   <b>MongoDB:</b> NoSQL database for storing user, quiz, and result data.
-   <b>JWT: </b>For token-based authentication.
-   <b>bcrypt.js:</b> For password hashing.
-   <b>Mongoose:</b> ODM (Object Data Modeling) library for MongoDB.

### 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/adityaK87/quiz-app.git
```

2. Change the working directory

```bash
 cd quiz-app
```

3. Install dependencies

```bash
npm install
```

4. Setup Environment Variables

```bash
PORT_NUMBER=3000
MONGODB_CONNECTION_URL=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-jwt-secret-key>
```

5. Run the app

```bash
npm run dev
```

6. Testing the API

    We can use Postman to test the API endpoints. Make sure to include the JWT token in the `token` header for protected routes.

### Folder structure

```bash
    quiz-app/
    |
    ├── controllers/
    │   ├── authController.js
    │   ├── quizController.js
    |
    ├── models/
    │   ├── userModel.js
    │   ├── quizModel.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── quizRoutes.js
    │
    ├── middlewares/
    │   ├── isUserAuthenticated.js
    |
    ├── config/
    │   └── db.js
    │
    ├── app.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── .env.example
    └── README.md
```
