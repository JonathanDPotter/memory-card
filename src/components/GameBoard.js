const GameBoard = (props) => {
  return (
    <div id="full-page" className="full-page">
      <header id="header" className="head">
        <h1 id="title" className="title">
          Memory Game
        </h1>
        <p id="description" className="description">
          Don't choose the same card twice!
        </p>
        <button id="reset" className="btn">
          Reset
        </button>
      </header>
      <div id="play-field" className="playfield">
        <div id="scorebox-1" className="scorebox">
          Score
        </div>
        <div id="scorebox-2" className="scorebox">
          Top Score
        </div>
        <div id="card-box" className="card-box"></div>
      </div>
    </div>
  );
};

export default GameBoard;
