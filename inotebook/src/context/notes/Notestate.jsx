import React, { useState } from "react";
import NoteContext from "./NoteContext.jsx";

const NoteState = (props) => {
  const host = "http://localhost:8080";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNotes = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchalluser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();

      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();

      const note = json;
      setNotes((prevNotes) => [...prevNotes, note]);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  // Edit A Note
  const editNote = async (id, title, description, tag) => {
    try {
      // API CALL
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();

      // Create a deep copy of the notes array to avoid potential side effects
      let newNotes = JSON.parse(JSON.stringify(notes));

      // Logic to Edit Note in client
      for (let i = 0; i < newNotes.length; i++) {
        const element = newNotes[i];
        if (element._id === id) {
          newNotes[i].title = title;
          newNotes[i].description = description;
          newNotes[i].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error editing note:", error.message);
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
