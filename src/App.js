import React from "react";
import Header from "./components/Header";
import './App.css';
import Body from "./components/Body";

const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <Body />
    </div>
  );
};

export default App;
