# Online Quiz Application - API Routes

This document provides an overview of the API routes for the Online Quiz Application, including request body examples and authentication details.

## **Authentication Routes**

### 1. **Register a New User**

-   **Method**: `POST`
-   **Endpoint**: `/api/auth/register`
-   **Description**: Creates a new user account.
-   **Request Body Example**:

    ```json
    {
    	"username": "johnDoe",
    	"email": "john@example.com",
    	"password": "password123"
    }
    ```

-   **Response**: Success message and user info (without the password).

---

### 2. **Login a User**

-   **Method**: `POST`
-   **Endpoint**: `/api/auth/login`
-   **Description**: Authenticates the user with email and password, returns a JWT token.
-   **Request Body Example**:

    ```json
    {
    	"email": "john@example.com",
    	"password": "password123"
    }
    ```

-   **Response**: JWT token.

---

## **Quiz Management Routes**

### 3. **Create a Quiz (Protected)**

-   **Method**: `POST`
-   **Endpoint**: `/api/quizzes/create`
-   **Description**: Creates a new quiz with a title and questions. Requires JWT authentication.
-   **Request Body Example**:

    ```json
    {
    	"title": "JavaScript Basics",
    	"questions": [
    		{
    			"question": "What is a closure in JavaScript?",
    			"options": [
    				"Function inside function",
    				"Global variable",
    				"Object method",
    				"Function prototype"
    			],
    			"correctAnswer": 0
    		},
    		{
    			"question": "Which company developed JavaScript?",
    			"options": [
    				"Netscape",
    				"Microsoft",
    				"Sun Microsystems",
    				"Oracle"
    			],
    			"correctAnswer": 0
    		}
    	]
    }
    ```

-   **Response**: Success message and created quiz details.

---

### 4. **Get All Quizzes**

-   **Method**: `GET`
-   **Endpoint**: `/api/quizzes`
-   **Description**: Retrieves a list of all available quizzes.
-   **Request Body**: N/A (No body required)

-   **Response**: Array of quiz objects with basic details like `id`, `title`.

---

### 5. **Get Quiz Details by ID**

-   **Method**: `GET`
-   **Endpoint**: `/api/quizzes/:id`
-   **Description**: Fetches details of a specific quiz using its ID.
-   **Request Body**: N/A (No body required)

-   **Response**: Detailed quiz object including questions, options, and other metadata.

---

### 6. **Take a Quiz (Protected)**

-   **Method**: `POST`
-   **Endpoint**: `/api/quizzes/:id/take`
-   **Description**: Submit answers to a quiz and calculate the score. Requires JWT authentication.
-   **Request Body Example**:

    ```json
    {
    	"answers": [0, 2, 1] // Array of selected answers based on question indices
    }
    ```

-   **Response**: JSON object with score and total questions, like:

    ```json
    {
    	"score": 3,
    	"total": 5
    }
    ```

---

## **Authorization Requirement**

For protected routes (`/api/quizzes/create` and `/api/quizzes/:id/take`), the user needs to send the JWT token in the `token` header:
