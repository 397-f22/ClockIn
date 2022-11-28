import { useEffect } from "react";
import { useState } from "react";

const MathPuzzle = ({setAlarmRinging}) => {

    const [currentSolution, setCurrentSolution] = useState([]);

    useEffect(() => {
        if (currentSolution === word) {
          alert("Puzzle solved!");
          document.getElementById("puzzle-input").value = "";
          setCurrentSolution("");
          // update word
          
    
          const alarm = document.getElementById("alarm");
          alarm.mute = true;
          alarm.pause();
          setAlarmRinging(false);
        }
      }, [currentSolution]);
}