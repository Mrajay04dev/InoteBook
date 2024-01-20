import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NoteState from "./context/notes/Notestate";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
