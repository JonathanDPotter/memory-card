const Cards = (props) => {
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
  const makeCards = function (sym, i) {
    return (
      <div
        key={i}
        className="card"
        id={sym}
        onClick={props.handleClick}
      >{sym}</div>
    );
  };

  return <div id="cards">{symbols.map((sym, i) => makeCards(sym, i))}</div>;
};

export default Cards;
