import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

function About() {
  return (
    <div className="fs-3 fw-bold my-4 px-2">
      <span className="text-danger">This Is My About </span>
      <span className="text-success"> and I Study in Class </span>
    </div>
  );
}

export default About;
