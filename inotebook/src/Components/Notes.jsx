import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
export const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setnotes } = context;
  return (
    <div className="container mt-3">
      <h2 className="text-success ">Your Notes</h2>
      <div className="row">
        {notes.map((note) => (
          <Noteitem key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};
