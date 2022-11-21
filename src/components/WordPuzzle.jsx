import { useEffect } from "react";
import { useState } from "react";
import PuzzleElement from "./PuzzleElement";
import "./WordPuzzle.css";
import { shuffle } from "../utils/helpers";

const word = "describe";
const [puzzle, correctIndices] = shuffle(Array.from(word));

const WordPuzzle = ({ setPuzzleSolveStatus }) => {
    const [currentSolution, setCurrentSolution] = useState([]);

    useEffect(() => {
      if (currentSolution === word){
        setTimeout(() => {
          alert("Puzzle solved!");
          document.getElementById("puzzle-input").value = "";
          setCurrentSolution("");
          setPuzzleSolveStatus(true);

          const alarm = document.getElementById("alarm");
          alarm.mute = true;
          alarm.pause();
          console.log("pause");
        }, 100);
      }
    }, [currentSolution]);

    return (
        <div>
            <div>
              <input id="puzzle-input" className="puzzle-input" onChange={(e) => setCurrentSolution(e.target.value)}/>
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

export default WordPuzzle
