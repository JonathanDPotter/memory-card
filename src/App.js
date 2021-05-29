import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Cards from "./components/Cards";
import "./App.scss";

function App() {
  const [score, setScore] = useState(0),
    [topScore, setTopScore] = useState(0),
    [clicked, setClicked] = useState([]),
    [symbols, setSymbols] = useState([
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "+",
    ]);

  // shuffle function found on stackoverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = function (array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleClick = function (event) {
    const { id } = event.target;
    if (clicked.includes(id)) {
      if (score > topScore) {
        setTopScore((topScore) => score);
      }
      setScore((score) => 0);
      setClicked((clicked) => [])
    } else {
      setScore((score) => score + 1)
      setClicked((clicked) => [...clicked, id]);
    }
    setSymbols((symbols) => shuffle(symbols));
  };

  return (
    <div className="App">
      <GameBoard score={score} topScore={topScore} />
      <Cards handleClick={handleClick} symbols={symbols} />
      {clicked}
    </div>
  );
}

export default App;
