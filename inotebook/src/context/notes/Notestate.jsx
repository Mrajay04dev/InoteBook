import React, { useState } from "react";
import NoteContext from "./NoteContext.jsx";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "659eaa5adasdfece81d5ea71525a9f",
      user: "6597fdc735c0cd28as4a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adasdfece8d15e7a1525a9f",
      user: "6597fdc735c0dc284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adecde8sdaf15e71525a9f",
      user: "6597fdc735cd0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adasdfece8d15e71525a9f",
      user: "6597fdc735cd0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5edece8asdf15e7ds1525aa1",
      user: "6597fdc735cds0c284a9e54d7d",
      title: "My second Nfdsote updated",
      description: "hello Bro Its my second note updated",
      tag: "Yt",
      date: "2024-01-10T14:31:58.438Z",
      __v: 0,
    },
    {
      _id: "659eaa6adece8asdfdf15e71525aa3",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My third Note updated",
      description: "hello Bro Its my second note updated",
      tag: "Yt",
      date: "2024-01-10T14:32:10.830Z",
      __v: 0,
    },
    {
      _id: "659eafebdece81asdf5e7fs1525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add Note
  const addNote = (title, description, tag) => {
    //Todo : Api Call
    console.log("Adding The Note");
    let note = {
      _id: "659eafebdece815easdfd71525aa8",
      user: "6597fdc735c0c2d84a9e54d73",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete Note
  const deleteNote = (id) => {};

  // Edit A Note
  const editNote = (id) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
