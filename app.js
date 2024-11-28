const yargs = require("yargs");

const notes = require("./note");

// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(yargs.argv);
// add read remove list notes

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Tilte",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
    // console.log('Title: ' +argv.title);
    // console.log('Body: ' +argv.body);
    // node app.js  add --title="Buy" --body="the is a buy"
    //  building command to add title and body is command is add
  },
});

// create remove command

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder:{
    title:{
      describe:'Note title',
      demandOption :true,
      type : 'string'
    }

  },

  handler: function (argv) {
    //console.log("Removing a  note");

    notes.removeNote(argv.title)
  },
});

// Read a note

yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: function () {
    console.log("Reading a  note");
  },
});

// list the notes

yargs.command({
  command: "list",
  describe: "List a new note",

  handler () {
    notes.listNotes()
  },
});

yargs.parse();
// console.log(yargs.argv);
