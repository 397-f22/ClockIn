import { useEffect } from "react";
import "./PuzzleElement.css";

const PuzzleElement = ({char, correctIndex, currentSolution}) => {
    const charDiv = document.getElementById(`char-${correctIndex}`);

    useEffect(() => {
      if (charDiv !== null) {
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
