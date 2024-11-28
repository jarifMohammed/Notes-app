# Notes App

This is a simple CLI-based Notes app built using **Node.js**. You can use this app to create, read, remove, and list notes through the command line interface.

## Features

- **Add** a new note with a title and body.
- **Remove** an existing note by title.
- **Read** a specific note by title.
- **List** all saved notes.

## Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone or download the repository:
    ```bash
    git clone https://github.com/your-username/notes-app.git
    ```

2. Navigate to the project folder:
    ```bash
    cd notes-app
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Now you are ready to use the app!

## Usage

Once the app is set up, you can use the following commands via the command line.

### 1. Add a new note

To add a new note, use the following command:

```bash
node app.js add --title="Your Note Title" --body="Your note content goes here."


  ### 1. Remove  new note

To remove  new note, use the following command:

```bash
node app.js remove --title="Your Note Title" 

### 1. Read   note

To read notes, use the following command:

```bash
node app.js read --title="Your Note Title"

### 1. List all  note

To list all notes, use the following command:

```bash
node app.js list 


Technologies Used
 1 Node.js for backend logic
 2 Chalk for colorful terminal output
 3 yargs for command-line argument parsing

 Versions
 
 "chalk": "^2.4.1",
 "yargs": "^17.7.2"