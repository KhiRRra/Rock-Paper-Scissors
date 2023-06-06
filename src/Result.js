import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Result.css";

const Result = (props) => {
  const { ai, player, result, playerScore, aiScore, games } = props;

  return (
    <div className="result col-10 d-flex align-items-center">
      <div className="choise col-12 col-md-4 d-flex flex-column">
        <p>Twój wybór: {player}</p>
        <p>AI wybór: {ai}</p>
        <h3>Wynik: {result} </h3>
      </div>
      <div className="score col-12 col-md-4 d-flex flex-column">
        <p>Runda: {games}</p>
        <p>Twóje punkty: {playerScore} </p>
        <p>AI punkty: {aiScore}</p>
      </div>
    </div>
  );
};

export default Result;
