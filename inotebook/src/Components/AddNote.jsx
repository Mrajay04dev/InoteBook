import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-success mt-2">Add A Note</h2>

        <form className="fw-bolder   ">
          <div className="form-group my-3 ">
            <label htmlFor="title"> Add a Title</label>
            <input
              type="text"
              className="form-control my-2"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="Enter Title Of Your Note"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control my-2 "
              id="description"
              name="description"
              value={note.description}
              placeholder="Enter Your Description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control my-2"
              id="tag"
              name="tag"
              placeholder="Enter Your Tag"
              value={note.tag}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>

          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary my-1"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
