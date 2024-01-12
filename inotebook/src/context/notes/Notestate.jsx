import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext.jsx";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:8080";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNotes = async () => {
    // Api Call
    const response = await fetch(`${host}/api/notes/fetchalluser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    //Todo : Api Call
    const response = await fetch(`${host}/api/notes/addnote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const url = "api/notes/addnote";
    console.log("Adding The Note");
    let note = {
      _id: "659eaa5adece815e71525ar4",
      user: "6597fdc735c0c284a9e54daer",
      title: "My asdf asdf dasdfasdfasdfasdfasf sda fdas fote",
      description: "hello Baadfasd fasdfsdafasdfasdfdsfro Its my second note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete Note
  //Todo : Api Call
  const deleteNote = (id) => {
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => note._id !== id);

    setNotes(newNotes);
  };

  // Edit A Note
  const editNote = async (id, title, description, tag) => {
    // API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to delete Note in client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
