import { useState } from "react";
import PuzzleElement from "./PuzzleElement";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const WordPuzzle = () => {//take the alarm as input or the set alarm function to stop it
    const [index, setIndex] = useState(0);
    const [currentSolution, setCurrentSolution] = useState([]);
    let word = "describe"
    let puzzle = shuffle(Array.from(word))

    //This part might have to go into a use effect
    if (currentSolution === word) {
        //stop the alarm
    }

    return (//TODO: fill in empty slots using index and the word as an array
        <div>
            <div>
                {Array.from(word).map(char => <div>___</div>)}
            </div>
            <div>
                {puzzle.map(char => <PuzzleElement char={char} currentSolution={currentSolution}
                    setCurrentSolution={setCurrentSolution} index={index}
                    setIndex={setIndex} word={word} />)}
            </div>
        </div>
    );
}

export default WordPuzzle