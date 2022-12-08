import { useEffect } from "react";
import { useState } from "react";
import PuzzleElement from "./PuzzleElement";
import "./WordPuzzle.css";
import { shuffle } from "../utils/helpers";
import { wordList } from "../utils/wordList";

let randomIndex = Math.floor(Math.random() * wordList.length);
let word = wordList[randomIndex]["word"];
let [puzzle, correctIndices] = shuffle(Array.from(word));

const WordPuzzle = ({ setAlarmRinging, testing }) => {
  const [currentSolution, setCurrentSolution] = useState([]);

  useEffect(() => {
    if (document.getElementById("word-solution") !== null) {
      const wordSolution = document.getElementById("word-solution");
      wordSolution.value = word;
    };
  }, []);

  useEffect(() => {
    // console.log("currentSolution", currentSolution);

    if (currentSolution === word) {
      alert("Puzzle solved!");
      document.getElementById("puzzle-input").value = "";
      setCurrentSolution("");
      // update word
      randomIndex = Math.floor(Math.random() * wordList.length);
      word = wordList[randomIndex]["word"];
      [puzzle, correctIndices] = shuffle(Array.from(word));

      const wordSolution = document.getElementById("word-solution");
      wordSolution.value = word;

      if (!testing) {
        const alarm = document.getElementById("alarm");
        alarm.mute = true;
        alarm.pause();
        setAlarmRinging(false);
      }
    }
  }, [currentSolution]);

  return (
    <div>
      <div data-testid="word-solution" id="word-solution" className="word-solution" />
      <div>
        <input data-testid="puzzle-input" id="puzzle-input" className="puzzle-input" onChange={(e) => {
          // console.log("target", e.target.value)
          setCurrentSolution(e.target.value)
        }} />
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
