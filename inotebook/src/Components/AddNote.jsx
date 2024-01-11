import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "Default",
  });
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-success mt-2">Add A Note</h2>

        <form className="fw-bolder  ">
          <div className="form-group my-3 ">
            <label htmlFor="title"> Add a Title</label>
            <input
              type="text"
              className="form-control my-2"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter Title Of Your Note"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control my-2 "
              id="description"
              name="description"
              placeholder="Enter Your Description"
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-1"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
