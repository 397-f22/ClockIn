import { useEffect } from "react";
import { useState } from "react";
import PuzzleElement from "./PuzzleElement";
import "./WordPuzzle.css";
import { shuffle } from "../utils/helpers";
import { wordList } from "../utils/wordList";

let randomIndex = Math.floor(Math.random() * wordList.length);
let word = wordList[randomIndex]["word"];
let [puzzle, correctIndices] = shuffle(Array.from(word));

const WordPuzzle = ({ setAlarmRinging }) => {

  const [currentSolution, setCurrentSolution] = useState([]);

  useEffect(() => {
    if (currentSolution === word) {
      alert("Puzzle solved!");
      document.getElementById("puzzle-input").value = "";
      setCurrentSolution("");
      // update word
      randomIndex = Math.floor(Math.random() * wordList.length);
      word = wordList[randomIndex]["word"];
      [puzzle, correctIndices] = shuffle(Array.from(word));

      const alarm = document.getElementById("alarm");
      alarm.mute = true;
      alarm.pause();
      setAlarmRinging(false);
    }
  }, [currentSolution]);

  return (
    <div>
      <div>
        <input id="puzzle-input" className="puzzle-input" onChange={(e) => setCurrentSolution(e.target.value)} />
      </div>
      <div className="puzzle-elements">
        {puzzle.map((char, i) => (
          <PuzzleElement
            key={i}
            char={char}
            correctIndex={correctIndices[i]}
            word={word}
            currentSolution={currentSolution}
          />
        ))}
      </div>
    </div>
  );
}

export default WordPuzzle;
