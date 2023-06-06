import React, { useState } from "react";
import Result from "./Result";
import "./Game.css";
import kamień from "./foto/rock.png";
import papier from "./foto/paper.png";
import nożyce from "./foto/scissors.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Game = () => {
  const [playerChoise, setPlayerChoise] = useState("");
  const [aiChoise, setAiChoise] = useState("");
  const [result, setResult] = useState("");
  const [games, setGames] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAIScore] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const handleHand = (e) => {
    setPlayerChoise(() => e.target.dataset.option);
    if (disabled === true) {
      setPlayerChoise(playerChoise);
    }
  };

  const handleAiChoise = (player) => {
    const arr = ["kamień", "papier", "nożyce"];
    const aiChoise = arr[Math.floor(Math.random() * 3)];
    setAiChoise(() => aiChoise);
    setResult(gameResult(playerChoise, aiChoise));
  };

  const gameResult = (player, ai) => {
    if (player === "") {
      alert("Wybierz dłoń!");
      setAiChoise("");
      return;
    }

    if (ai === player) {
      setGames(games + 1);
      setDisabled(!disabled);
      return "Remis :/";
    }
    if (
      (ai === "kamień" && player === "nożyce") ||
      (ai === "nożyce" && player === "papier") ||
      (ai === "papier" && player === "kamień")
    ) {
      setGames(games + 1);
      setAIScore(aiScore + 1);
      setDisabled(!disabled);
      return "Przegrałeś :(";
    } else {
      setGames(games + 1);
      setPlayerScore(playerScore + 1);
      setDisabled(!disabled);
      return "Wygrałeś! :)";
    }
  };

  const handleReset = (player, ai) => {
    setPlayerChoise("");
    setAiChoise("");
    setResult("");
    setDisabled(false);
  };


  const handleResetGame=()=>{
    setPlayerChoise("");
    setAiChoise("");
    setResult("");
    setGames(0);
    setPlayerScore(0);
    setAIScore(0);
  }



  return (
    <div className="container">
      <h1 className="title col-8">Zagraj w papier, nożyce, kamień!</h1>
      <h2 className="subtitle">Proszę, wybierz dłoń:</h2>
      <div className="foto col-6 d-flex justify-content-around">
        <img alt="" src={papier} data-option="papier" onClick={handleHand} />
        <img alt="" src={kamień} data-option="kamień" onClick={handleHand} />
        <img alt="" src={nożyce} data-option="nożyce" onClick={handleHand} />
      </div>

      <button
        className="btn col-6 col-sm-6 col-md-4 col-lg-2"
        onClick={handleAiChoise}
        disabled={disabled}
      >
        Zagraj!
      </button>
      <Result
        player={playerChoise}
        ai={aiChoise}
        result={result}
        playerScore={playerScore}
        aiScore={aiScore}
        games={games}
      />
      <button
        className="btn col-6 col-sm-6 col-md-4 col-lg-2"
        onClick={handleReset}
        disabled={!disabled}
      >
        Zagraj ponownie!
      </button>
      <br/>
      <button className="btn col-6 col-sm-6 col-md-4 col-lg-2 my-4" onClick={handleResetGame}>Reset</button>
    </div>
  );
};

export default Game;
