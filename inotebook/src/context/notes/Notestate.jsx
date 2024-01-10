import React, { useState } from "react";
import NoteContext from "./NoteContext.jsx";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "659eaa5adece815e71525a9f",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adece815e71525a9f",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adece815e71525a9f",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5adece815e71525a9f",
      user: "6597fdc735c0c284a9e54d7d",
      title: "My asdf asdf dote",
      description: "hello Baadfasd fad note",
      tag: "Yt",
      date: "2024-01-10T14:31:54.937Z",
      __v: 0,
    },
    {
      _id: "659eaa5edece815e71525aa1",
      user: "6597fdc735c0c284a9e54d7d",
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
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
