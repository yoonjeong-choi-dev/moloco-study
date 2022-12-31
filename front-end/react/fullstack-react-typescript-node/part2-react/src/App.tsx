import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Chapter4App from "./ch4-react-basic/Chapter4App";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <button>Index</button>
        </Link>
        <Link to="/ch4">
          <button>Chapter 4</button>
        </Link>
      </header>
      <hr />

      <Routes>
        <Route path={'/'} element={<Welcome/>}/>
        <Route path={'/ch4/*'} element={<Chapter4App/>}/>
      </Routes>
    </div>
  );
}

export default App;
