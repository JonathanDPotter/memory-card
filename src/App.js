import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Cards from "./components/Cards";
import "./App.scss";

function App() {
  const [clicked, setClicked] = useState([]);

  const handleClick = function (event) {
    const { id } = event.target;
    setClicked((clicked) => [...clicked, id]);
  };

  return (
    <div className="App">
      <GameBoard />
      <Cards handleClick={handleClick} />
      {clicked}
    </div>
  );
}

export default App;
