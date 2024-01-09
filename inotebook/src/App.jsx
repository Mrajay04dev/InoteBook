import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NoteState from "./context/notes/Notestate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NoteState>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
