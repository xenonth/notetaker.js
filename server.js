//look at filing and data parsing using router!!

// Application Dependencies
const express = require("express")
const path = require("path");
const fs= require("fs");

//const router = express.Router();
const app = express();
const router = express.Router()


// variables for port and routing
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database variable
const notes = require("./db/db.json");

//require conversion to an array




//ROUTES
//default route

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
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
  fs.appendFile("db/db.json", notes , function(err) {
    console.log(err)
  })
  
  //return file data to the user 

  res.json(notes);
  
  // Using a RegEx Pattern to remove spaces from newCharacter

  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
});


//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });