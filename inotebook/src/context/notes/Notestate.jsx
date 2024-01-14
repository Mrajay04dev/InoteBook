import React, { useState, useEffect } from "react";
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
        },
      });
      const json = await response.json();
      console.log(json);
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      console.log(json);

      console.log("Adding The Note");
      const newNote = {
        // _id: "659eaa5adece815e71525ar4",
        user: "6597fdc735c0c284a9e54daer",
        title: title,
        description: description,
        tag: tag,
        date: "2024-01-10T14:31:54.937Z",
        __v: 0,
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
        },
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);

      console.log("Deleting the note with id" + id);
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5N2ZkYzczNWMwYzI4NGE5ZTU0ZDdkIn0sImlhdCI6MTcwNDUyMTgwNH0.jzy5YTlCOgoc_sCCKypVILtDFSjhNp0TcHqMUyeiyBc",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      console.log(json);

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

      console.log("Edited note with id: " + id);
    } catch (error) {
      console.error("Error editing note:", error.message);
    }
  };

  useEffect(() => {
    // Fetch notes when the component mounts
    getNotes();
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
