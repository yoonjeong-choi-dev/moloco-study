import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Chapter4App from "./ch4-react-basic/Chapter4App";
import Chapter5App from "./ch5-react-hook/Chapter5App";
import Chapter6App from "./ch6-react-testing/Chapter6App";

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
        <Link to="/ch5">
          <button>Chapter 5</button>
        </Link>
        <Link to="/ch6">
          <button>Chapter 6</button>
        </Link>
      </header>
      <hr />

      <Routes>
        <Route path={'/'} element={<Welcome/>}/>
        <Route path={'/ch4/*'} element={<Chapter4App/>}/>
        <Route path={'/ch5/*'} element={<Chapter5App/>}/>
        <Route path={'/ch6/*'} element={<Chapter6App/>}/>
      </Routes>
    </div>
  );
}

export default App;
