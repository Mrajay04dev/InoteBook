import React, { useState } from "react";
import NoteContext from "./NoteContext.jsx";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "659eaa5adece815e71525af4",
      user: "6597fdc735c0c284a9e54d7f",
      title: "My asdf asdf dasdfasdfasdfasdfasf sda fdas fote",
      description: "hello Baadfasd fasdfsdafasdfasdfdsfro Its my second note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5edece815e7152dsfa1",
      user: "6597fdc735c0c284a9e54ddsf",
      title: "My second Note updated",
      description: "hello Bro Its my second note updated",
      tag: "Yt",
      date: "2024-01-10T14:31:58.438Z",
      __v: 0,
    },
    {
      _id: "659eaa6adece815e71525aa3",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My third Note updated",
      description: "hello Bro Its my second note updated",
      tag: "Yt",
      date: "2024-01-10T14:32:10.830Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
      user: "6597fdc735c0c284a9e54d7d",
      title: "Legit",
      description: "This one is Legit",
      tag: "Legit",
      date: "2024-01-10T14:55:39.245Z",
      __v: 0,
    },
    {
      _id: "659eafebdece815e71525aa8",
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
  const editNote = (id, title, description, tag) => {};


  
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
