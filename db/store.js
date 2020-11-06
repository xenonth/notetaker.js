const fs = require("fs");
const uuidv1 = require("uuidv1");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    read () {
        return readFileAsync("db/db.json", "utf8");
    }

    write(notes) {
        return writeFileAsync("db/db.json", JSON.stringify(notes))
    }

    addNote (note) {
        const {title, text } = note;
        const newNote = {
            title, 
            text, 
            id: uuidv1(), 
        }

        return this.getNote ()
            .then((notes) => [...notes, newNote])
            .then((newNote) => this.write(notes)
            .then(() => newNote))

    }

    getNote () {
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
