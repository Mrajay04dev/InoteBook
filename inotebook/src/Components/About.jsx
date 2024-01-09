import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div className="fs-3 fw-bold my-4 px-2">
      This Is My About <span className="text-danger">{a.state.name}</span> and I
      Study in Class <span className="text-success">{a.state.class}</span>
    </div>
  );
}

export default About;
