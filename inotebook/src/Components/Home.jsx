import React from "react";

import { Notes } from "./Notes";
function Home() {
  return (
    <div className="container">
      <h2 className="text-success">Add A Note</h2>

      <form className="fw-bolder my-3 ">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control my-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted my-2 p-3">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input my-2"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
      <Notes />
    </div>
  );
}

export default Home;
