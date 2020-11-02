// Application Dependencies
const express = require("express");
const path = require("path");
const fs= require("fs");

// variables for port and routing
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database variable
const notes = path

//ROUTES

//route for GET index.html (`/`)
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });



//route for GET blah/notes.html (`/notes.html)
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
/* note retrieval from db.json
1. Use fs to call db.json 
2. display it on notes.html 
3. singular notes if time permits

*/


/* sending to db.json
1. fs.appendfile to add to the database 
2. ability to recall that information
*/



//route for GET api/notes

//POST api/notes

//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });