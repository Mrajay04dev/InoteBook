import React, { useEffect } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./Addnote";
export const Notes = () => {
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote />
      <div className="container mt-3">
        <h2 className="text-success ">Your Notes</h2>
        <div className="row">
          {notes.map((note) => (
            <Noteitem key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};
