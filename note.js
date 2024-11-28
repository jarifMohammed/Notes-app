const fs = require("fs");
const chalk = require('chalk')

const getNotes = function () {
  return " you notes-";
};
// add note function 
const addNote = function (title, body) {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });
  // 2nd one is efficient way  we can use arrow function also to reduce the code
  const duplicateNotes = notes.find(function (note){
    return note.title === title
  })



  // if (duplicateNotes.length === 0)
     if(!duplicateNotes){
    notes.push({
      title: title,
      body: body,
    });
    //   console.log(notes);
    saveNotes(notes);
    console.log("Notes added");
  } else {
    console.log("title taken");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("note.json", dataJson);
};

const loadNotes = function () {
  try {
    const data = fs.readFileSync("note.json");
    const dataJSON = data.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};



// remove note functionality
const removeNote = function (title) {
  // console.log(title);
  const notes =loadNotes()
  const notesTokeep = notes.filter(function (note){
    return note.title!==title
  })

if(notes.length > notesTokeep.length){
  console.log(chalk.green.inverse('Note removed'));

}
else{
  console.log(chalk.red.inverse('NO note found'));
}

  saveNotes(notesTokeep)
} 


//list notes

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your Notes'));

   notes.forEach((note) => {
    console.log(note.title);
   })

}


// read note

const readNote = (title) => {
  const notes = loadNotes()

  const note = notes.find((note) => {
    return note.title === title
  })


  if(note){
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  }
  else{
    console.log(chalk.red.inverse('Notes not found'));
  }
}



module.exports = {
  getNotes: getNotes,
  addNote: addNote,

  removeNote : removeNote,
  listNotes : listNotes,
  readNote :readNote
};
