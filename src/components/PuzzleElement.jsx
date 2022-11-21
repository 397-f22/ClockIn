import { useEffect } from "react";
import "./PuzzleElement.css";

const PuzzleElement = ({char, correctIndex, word, currentSolution}) => {
    const checkCorrect = () => {
      if(char === word[index]){
      setCurrentSolution([...currentSolution,char])
      setIndex(index+1)
      //Remove button or set it as gray
      }
      else{
          //glow red or something?
      }
    }

    // document.addEventListener("DOMContentLoaded", () => {
    //   const charDiv = document.getElementById(`char-${correctIndex}`);

    //   useEffect(() => {
    //     charDiv.className = determineStyling();
    //   }, [currentSolution]);
    // });

    const charDiv = document.getElementById(`char-${correctIndex}`);

    useEffect(() => {
      if (charDiv !== null) {
        console.log(charDiv)
        charDiv.className = determineStyling();
      }
    }, [currentSolution]);

    const determineStyling = () => {
      const correctPosition = (currentSolution.length > correctIndex && currentSolution[correctIndex] === char);
      return correctPosition ? "char-gray" : "char-default";
    };

    return(
      <div id={`char-${correctIndex}`}>{char}</div>
    )
}

export default PuzzleElement
