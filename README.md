# Authentication System

An authentication system designed to allow users to register and log in.
This system consists of both a front-end component built with React and 
a back-end component handling user data and authentication logic. The
communication between the front-end and back-end is established using
Axios for making HTTP requests.

## Front-End (React)

The front-end component is built using React, a popular JavaScript library for building user interfaces.
It provides a user-friendly interface for the registration and login processes. Key features include:

- User Registration: Users can create an account by providing their email, username, and password.
- User Login: Registered users can log in using their username and password.
- Feedback Messages: The system provides feedback messages based on the server's responses, ensuring a smooth user experience.
- Front-End Code: The front-end code is organized and designed for clarity and ease of use.

## Back-End (Node.js and MySQL)

The back-end component handles the server-side functionality of the application, including user registration
and login logic. It interacts with a MySQL database to store and retrieve user data. Key features include:

- Express Server: The server is built with Express.js, a popular web application framework for Node.js.
- MySQL Database: User data is stored in a MySQL database, allowing for secure data management.
- API Endpoints: The back end provides API endpoints for user registration and login, each handling POST requests.
- Error Handling: The system handles errors gracefully, providing appropriate messages to users.

## How to Run

To run this authentication system, follow these steps:

1. Set up the MySQL database with appropriate user tables.
2. Clone this repository.
3. Navigate to the front-end directory and run `npm install` to install dependencies.
4. Start the front-end application.
5. Navigate to the back-end directory and run `npm install` to install dependencies.
6. Start the back-end server.
7. Access the system in your web browser.

## Dependencies

- React
- Express.js
- Axios
- MySQL2
- CORS

## Credits

Feel free to contribute or provide feedback!
