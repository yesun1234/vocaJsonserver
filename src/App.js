import React from "react";
import Header from "./component/Header";
import Day from "./component/Day";
import Word from "./component/Word";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empty from "./component/Empty";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Day />} />
          <Route path="/day/:day" element={<Word />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
