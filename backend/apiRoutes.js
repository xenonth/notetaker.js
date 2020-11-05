const path = require("path");
const fs= require("fs");
 
 app = () => { 
    // reading and extracting from the notes database.
    fs.readFile("../db/db.json", "utf-8", function (error, data) {
        if (error) {
        console.log(error) 
        } else {

            let notesData = JSON.parse(data);
            console.log(notesData);
        }
    
        })

}

app();