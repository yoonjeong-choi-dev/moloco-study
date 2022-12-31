import React, { FC } from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./Home";
import AnotherScreen from "./AnotherScreen";

const Chapter4App: FC = () => {

  return <>
    <h1>
      Chapter 4: React Basic
    </h1>
    <a href={'/ch4'}>go to "/ch4"</a><br/>
    <a href={'/ch4/another'}>go to "/ch4/another"</a>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/another" element={<AnotherScreen/>}/>
    </Routes>
  </>;
};

export default Chapter4App;