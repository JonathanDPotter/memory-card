import Cards from "./Cards";

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
          <h1 id="score-title" className="score-title">
            Score
          </h1>
          <h1 id="score" className="score">
            {props.score}
          </h1>
        </div>
        <div id="scorebox-2" className="scorebox">
          <h1 id="top-score-title" className="score-title">
            Top Score
          </h1>
          <h1 id="top-score" className="score">
            {props.topScore}
          </h1>
        </div>
        <div id="card-box" className="card-box">
          <Cards handleClick={props.handleClick} symbols={props.symbols} />
        </div>
        <div id="status-box" className="status-box">
          {props.status}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
