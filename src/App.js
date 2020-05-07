import React, { useState } from "react";
import "./App.css";
import List from "./List";


function App() {
  const [lists, setLists] = useState([ <List /> ]);

  const addList = () => {
    const newLists = [...lists, <List />];
    setLists(newLists);
  };

  const removeList = () => {
    const newLists = [...lists];
    newLists.pop()
    setLists(newLists);
  };

  return (
    <div className="app">
      <div className="btn-section">
        <button onClick={() => addList()}>+</button>
        <button onClick={() => removeList()}>x</button>
      </div>
      {lists.map((NewList, index) => (
          NewList
      ))}
      
    </div>
  );
}

export default App;
