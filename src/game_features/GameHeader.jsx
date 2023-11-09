import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import QuestionMarkCorrect from "./QuestionMarkCorrect";
import { restart } from "./gameSlice";
function GameHeader() {
  const dispatch = useDispatch();
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <Button type="again" onClick={() => dispatch(restart())}>
        Again!
      </Button>
      <QuestionMarkCorrect />
    </header>
  );
}

export default GameHeader;
