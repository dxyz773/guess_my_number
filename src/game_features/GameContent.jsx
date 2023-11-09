import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import Section from "../ui/Section";
import {
  checkNumber,
  getGameStatus,
  getHighScore,
  getRandomNumber,
  getScore,
} from "./gameSlice";
import { useEffect, useState } from "react";

function GameContent() {
  const [guessNum, setGuessNum] = useState("");
  const [message, setMessage] = useState("");

  const score = useSelector(getScore);
  const highScore = useSelector(getHighScore);
  const dispatch = useDispatch();
  const randomNum = useSelector(getRandomNumber);
  const gameStatus = useSelector(getGameStatus);

  function handleClick() {
    if (!guessNum) return;
    dispatch(checkNumber(guessNum));
    if (guessNum > randomNum) setMessage("Too High");
    if (guessNum < randomNum) setMessage("Too Low");
    if (guessNum === randomNum) setMessage("");
  }
  useEffect(
    function () {
      if (gameStatus === "play") setGuessNum("");
    },
    [gameStatus]
  );

  return (
    <main>
      <Section className="left">
        <input
          type="number"
          className="guess"
          value={guessNum}
          onChange={(e) => setGuessNum(Number(e.target.value))}
        />
        <Button type="check" onClick={handleClick}>
          Check!
        </Button>
      </Section>

      <Section className="right">
        <p className="message" style={{ marginBottom: "5px" }}>
          {gameStatus === "win" ? "Correct Number!" : "Start guessing..."}
        </p>
        <p
          style={{
            marginBottom: "5px",
            color: message === "Too High" ? "red" : "green",
          }}
        >
          {message}
        </p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highScore}</span>
        </p>
      </Section>
    </main>
  );
}

export default GameContent;
