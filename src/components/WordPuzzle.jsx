import { useEffect } from "react";
import { useState } from "react";
import PuzzleElement from "./PuzzleElement";
import "./WordPuzzle.css";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    let indices = [...Array(array.length).keys()];

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];

        [indices[currentIndex], indices[randomIndex]] = [
          indices[randomIndex], indices[currentIndex]];
    }

    return [array, indices];
}

const word = "describe";
const [puzzle, correctIndices] = shuffle(Array.from(word));

const WordPuzzle = ({alarmList, setAlarmList}) => {//take the alarm as input or the set alarm function to stop it
    const [currentSolution, setCurrentSolution] = useState([]);

    useEffect(() => {
      if (currentSolution === word){
        alert("Puzzle solved!");

        alarmList.forEach(alarm => alarm.ringing = false);
        setAlarmList(alarmList);

        const alarm = document.getElementById("alarm");
        alarm.mute = true;
        alarm.pause();
        console.log("pause");
      }
    }, [currentSolution]);

    return (//TODO: fill in empty slots using index and the word as an array
        <div>
            <div>
              <input className="puzzle-input" onChange={(e) => setCurrentSolution(e.target.value)}/>
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
