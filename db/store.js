const fs = require("fs");
const uuidv1 = require("uuidv1");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store { 
    constructor(data) {
        this.data = data;
    }
    
    // function to read db.json data file
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    // function to write new data to the file
    write(notes) {
        return writeFileAsync("db/db.json", JSON.stringify(notes))
    }

    addNote(note) {
        // draw existing data from the db.json
        const {title, text } = note;
        
        //setting out new data with a unique identifier

        const newNote = {
            title, 
            text, 
            id: uuidv1(), 
        }

       //setting data up as an array
        let notesArray = []

        //adding new note object to the JSON dataarray
        notesArray.push(newNote)

        //overwrite the data file with new data
        this.write(notesArray);
        
        this.getNote();
    }



    getNote() {

        // read the data then convert it into a data Object.
         this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes.concat(JSON.parse(notes))
            } catch (err){
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }

        
}

module.exports = new Store();
