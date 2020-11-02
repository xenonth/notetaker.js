// Application Dependencies
const express = require("express");
const path = require("path");

// variables for port and routing
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Accessing the database

//ROUTES

//route for GET index.html (`/`)
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });



//route for GET blah/notes.html (`/notes.html)

//route for GET api/notes

//POST api/notes

//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });