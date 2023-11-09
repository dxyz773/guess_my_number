import { useSelector } from "react-redux";
import { getGameStatus } from "./gameSlice";
import { useEffect } from "react";

function QuestionMarkCorrect() {
  const randomNum = useSelector((state) => state.game.randomNumber);
  const gameStatus = useSelector(getGameStatus);
  const win = gameStatus === "win";
  const play = gameStatus === "play";

  useEffect(
    function () {
      if (win) {
        document.body.style.backgroundColor = "#60b347";
      }
      if (play) {
        document.body.style.backgroundColor = "#222";
      }
    },
    [win, play]
  );

  return <div className="number">{win ? randomNum : "?"}</div>;
}

export default QuestionMarkCorrect;
