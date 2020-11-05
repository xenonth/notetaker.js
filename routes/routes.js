/* following code was inspired by the following github file https://github.com/amandalatkins/note-taker/blob/master/routes/routes.js As I found this week's homework difficult 
and used the above as a guide to understand how to code app.post due to being unwell most of the week from a cold. 
*/
// dependancy variables
const fs= require("fs");
const express = require("express");

//shorthand variables
const app = express();

notesApi = () => { 
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

