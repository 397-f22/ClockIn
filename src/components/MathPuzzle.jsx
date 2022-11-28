import { useEffect } from "react";
import { useState } from "react";

let operations = ["addition", "subtraction", "multiplication", "division"]
let solution, problem;

const generateMath = () => {
  let num1, num2;
  let operation;
  num1 = Math.ceil(Math.random() * 12);
  num2 = Math.ceil(Math.random() * 12);
  operation = operations[Math.floor(Math.random() * 4)];

  switch (operation) {
    case "addition":
      solution = num1 + num2;
      problem = `${num1} + ${num2} = ?`;
      break;
    case "subtraction":
      solution = num1 - num2;
      problem = `${num1} - ${num2} = ?`;
      break;
    case "multiplication":
      solution = num1 * num2;
      problem = `${num1} * ${num2} = ?`;
      break;
    case "division":
      solution = num1;
      num1 = num1 * num2;
      problem = `${num1} / ${num2} = ?`;
      break;
  }
}

generateMath();

const MathPuzzle = ({ setAlarmRinging }) => {

  const [currentSolution, setCurrentSolution] = useState(null);

  useEffect(() => {
    if (currentSolution === solution.toString()) {
      alert("Puzzle solved!");
      document.getElementById("puzzle-input").value = "";
      setCurrentSolution("");
      // update math problem
      generateMath();


      const alarm = document.getElementById("alarm");
      alarm.mute = true;
      alarm.pause();
      setAlarmRinging(false);
    }
  }, [currentSolution]);

  return (
    <div>
      <div>{problem}</div>
      <input id="puzzle-input" className="puzzle-input" onChange={(e) => setCurrentSolution(e.target.value)} />
    </div>
  )
}

export default MathPuzzle;