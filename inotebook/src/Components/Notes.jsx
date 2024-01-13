import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./Addnote";

export const Notes = () => {
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const ref = useRef(null);
  const handleClick = (e) => {
    console.log("Updating the note", note);

    e.preventDefault();
    // addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" alt="Close">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form className="fw-bolder  ">
                <div className="form-group my-3 ">
                  <label htmlFor="etitle"> Add a Title</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title Of Your Note"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="edescription">Description</label>
                  <input
                    type="text"
                    className="form-control my-2 "
                    id="edescription"
                    name="edescription"
                    placeholder="Enter Your Description"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="etag">Tag</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    placeholder="Enter Your Tag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h2 className="text-success">Your Notes</h2>
        <div className="row">
          {notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};
