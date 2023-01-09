import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Chapter4App from "./ch4-react-basic/Chapter4App";
import Chapter5App from "./ch5-react-hook/Chapter5App";
import Chapter6App from "./ch6-react-testing/Chapter6App";
import Chapter7ReduxApp from "./ch7-redux/SemiIndex";
import Chapter7ReactContextApp from './ch7-react-context/Chapter7ReactContextApp';

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
        <Link to="/ch7-redux">
          <button>Chapter 7 - Redux</button>
        </Link>
        <Link to="/ch7-context">
          <button>Chapter 7 - React Context</button>
        </Link>
      </header>
      <hr />

      <Routes>
        <Route path={'/'} element={<Welcome/>}/>
        <Route path={'/ch4/*'} element={<Chapter4App/>}/>
        <Route path={'/ch5/*'} element={<Chapter5App/>}/>
        <Route path={'/ch6/*'} element={<Chapter6App/>}/>
        <Route path={'/ch7-redux/*'} element={<Chapter7ReduxApp/>}/>
        <Route path={'/ch7-context/*'} element={<Chapter7ReactContextApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
