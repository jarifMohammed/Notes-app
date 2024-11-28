const fs = require("fs");

const getNotes = function () {
    return ' you notes-'
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note){

    return note.title === title
  })

  if(duplicateNotes.length === 0){
    notes.push({
        title :title,
        body: body
      })
    //   console.log(notes);
       saveNotes(notes)
       console.log('Notes added');
    
  }
  else{
    console.log('title taken');

  }

  
  
}

const saveNotes = function (notes) {

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('note.json' , dataJson)

}

const loadNotes = function () {
  try {
    const data = fs.readFileSync("note.json");
    const dataJSON = data.toString();

    return JSON.parse(dataJSON);
  } catch(e){
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
