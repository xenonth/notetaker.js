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

// "/notes" responds with the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// All other routes respond with the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
  
  //api routes
notesApi();
 
  
  // Using a RegEx Pattern to remove spaces from newCharacter

  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    

//ability to delete said notes

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//apiRoutes Function
function notesApi () { 
  // reading and extracting from the notes database.
  fs.readFile("db/db.json", "utf-8", function (error, data) {
      if (error) {
      console.log(error) 
      } else {
          // Use fs to call db.json
          
          let notes = JSON.parse(data);
          
          // api json route to return and display all written notes
          app.get("/api/notes", function(req, res) {
              return res.json(notes);
            });

          /* 
          1. Should receive a new note to save on the request body, 
          2. add it to the `db.json` file,
          3. return the new note to the client.
          4. singular notes if time permits
          */
         app.post("/api/notes", function (req, res) {

              let newNote = req.body;
          
              console.log("post received");
        
          // push to notes JSON data Array
              notes.push(newNote);

          // Adding newNote to the database
              updateNotesDB ();
         
          })
        
          // updating database function
          function updateNotesDB () {
              fs.writeFile("db/db.json", JSON.stringify(notes, "\t") , function(err) {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log(`Successfully Added ${newNote.title}`);
                  }

              })
          }
      }
  })    
}