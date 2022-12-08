import { useEffect } from "react";
import { useState } from "react";
import "./MathPuzzle.css";

let operations = ["+", "-", "*", "/"]
let solution, problem;

const evaluate = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  };
};

const generateMath = () => {
  let num1, num2, num3;
  let operation1, operation2;
  num1 = Math.ceil(Math.random() * 12);
  num2 = Math.ceil(Math.random() * 12);
  num3 = Math.ceil(Math.random() * 12);
  operation1 = operations[Math.floor(Math.random() * 4)];
  operation2 = operations[Math.floor(Math.random() * 3)];

  if (operation1 === "/") {
    num1 = num1 * num2;
  };

  problem = `${num1} ${operation1} ${num2} ${operation2} ${num3} = ?`;
  solution;

  if (operation2 === "*") {
    solution = evaluate(num2, num3, "*");
    solution = evaluate(num1, solution, operation1);
  } else {
    solution = evaluate(
      evaluate(num1, num2, operation1),
      num3,
      operation2
    );
  };
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
      <div className="math-problem" data-testid="math-problem">{problem}</div>
      <input id="puzzle-input" data-testid="puzzle-input" className="puzzle-input" onChange={(e) => setCurrentSolution(e.target.value)} />
    </div>
  )
}

export default MathPuzzle;
