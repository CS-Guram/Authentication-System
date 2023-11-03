// Import required Node.js modules
const express = require("express"); // Express.js for building the web server
const mysql2 = require("mysql2"); // MySQL database driver
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing (CORS)

// Create an instance of the Express application
const app = express();

// Configure middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// Create a MySQL connection with the database
const con = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "Tikiti1988@",
  database: "register",
});

// Attempt to connect to the MySQL database
con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + con.threadId);
});

// Define an endpoint for user login
app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  // Insert user registration data into the 'users' table
  con.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "ENTER CORRECT ASKED DETAILS!" });
      }
    }
  );
});

// Query the 'users' table for the given username and password
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG USERNAME OR PASSWORD!" });
        }
      }
    }
  );
});

// Start the Express server on port 3001
app.listen(3001, () => {
  console.log("running backend server");
});
