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
const noteJSON = require("./db/db.json");

//require conversion to an array




//ROUTES
//default route

  // If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


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

// api json route display all notes

/* sending to db.json
1. fs.appendfile to add to the database 
2. ability to recall that information
*/



//route for GET api/notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

//POST api/notes Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

app.post("./api/notes", function (req, res) {

  let newNote = req.body;
  
  console.log("post received");

  console.log(newNote);

  // push to notes data Array
  notes.push(newNote);

  // use fs to append data file
  fs.appendFile(notes)
  
  //return file data to the user 
  
  // Using a RegEx Pattern to remove spaces from newCharacter

  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newnote.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  res.json(newCharacter);

  characters.push(newCharacter);

  
});


//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });