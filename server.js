//look at filing and data parsing using router!!

// Application Dependencies
const express = require("express")
const path = require("path");
const fs= require("fs");
const store = require("./db/store.js");

//const router = express.Router();
const app = express();
const router = express.Router()


// variables for port and routing
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//api routes
//apiRoutes Function
  // reading and extracting from the notes database.
  app.get("/api/notes", (req, res) => {
    res.json(store.getNote());
  });

  app.post("/api/notes", (req, res) => {
    //retrieving data from store.addNoted 
    store.addNote(req.body);

    //log to console when a new note is added
    console.log("Note Added");


    // should send getNote data back
    res.send(store.getNote(req.body))
  });



// "/notes" responds with the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// All other routes respond with the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
  
  
//ability to delete said notes
router.delete("/notes/:id", (req, res) => {
  let removeNote = req.params.id;
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

  