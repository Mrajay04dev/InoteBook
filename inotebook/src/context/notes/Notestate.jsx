import React, { useState } from "react";
import NoteContext from "./NoteContext.jsx";

const NoteState = (props) => {
  const s1 = {
    name: "Ajay",
    class: "5b",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Vijay",
        class: "7b",
      });
    }, 3000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
