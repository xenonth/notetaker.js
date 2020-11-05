//look at filing and data parsing using router!!

// Application Dependencies
const express = require("express")
const path = require("path");
const fs= require("fs");

//const router = express.Router();
const app = express();
let router = express.Router()


// variables for port and routing
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// reading database variable

//require conversion to an array




//ROUTES
//default route

// "/notes" responds with the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// All other routes respond with the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
  
  //return file data to the user 

 
  
  // Using a RegEx Pattern to remove spaces from newCharacter

  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    

//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });