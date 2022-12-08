import { act } from 'react-dom/test-utils';
import { describe, expect, vi } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { wordList } from '../utils/wordList';
import AlarmList from './AlarmList';

describe("Alarm should not stop for incorrect puzzle answers", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
    vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(cleanup);

  test("If an answer to the word puzzle is incorrect, the alarm should not stop", () => {
    let alarms = [{
      "hour": 8,
      "minute": 0,
      "active": true,
      uid: 101
    }];

    let currentUser = {
      "puzzle_mode": "word",
      uid: 101
    };

    const date = new Date('December 7, 2022 07:59:59');
    vi.setSystemTime(date);

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarms} testing />);
    });

    // Initially, alarm is off
    const ringing = screen.getByTestId("ringing");
    expect(ringing.textContent).toBe("false");

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Alarm goes off due to time
    expect(ringing.textContent).toBe("true");

    const wordPuzzleInput = screen.getByTestId("puzzle-input");
    const wordSolution = screen.getByTestId("word-solution");

    act(() => {
      fireEvent.change(wordPuzzleInput, {target: {value: wordSolution.value[0]}});
    });

    // Alarm should still be going off with incorrect value
    expect(ringing.textContent).toBe("true");

    // Verify test can fail if we enter correct solution
    act(() => {
      fireEvent.change(wordPuzzleInput, {target: {value: wordSolution.value}});
    });

    expect(ringing.textContent).toBe("false");
  });

  test("If an answer to the math puzzle is incorrect, the alarm should not stop", () => {
    let alarms = [{
      "hour": 8,
      "minute": 0,
      "active": true,
      uid: 101
    }];

    let currentUser = {
      "puzzle_mode": "math",
      uid: 101
    };

    const date = new Date('December 7, 2022 07:59:59');
    vi.setSystemTime(date);

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarms} testing />);
    });

    // Initially, alarm is off
    const ringing = screen.getByTestId("ringing");
    expect(ringing.textContent).toBe("false");

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Alarm goes off due to time
    expect(ringing.textContent).toBe("true");

    const mathPuzzleInput = screen.getByTestId("puzzle-input");
    const mathSolution = eval(screen.getByTestId("math-problem").textContent.slice(0, -4));

    act(() => {
      fireEvent.change(mathPuzzleInput, {target: {value: mathSolution - 1}});
    });

    // Alarm should still be going off with incorrect value
    expect(ringing.textContent).toBe("true");

    // Verify test can fail if we enter correct solution
    act(() => {
      fireEvent.change(mathPuzzleInput, {target: {value: mathSolution}});
    });

    expect(ringing.textContent).toBe("false");
  });
});

describe("Word and math puzzles should be deterministic (pulled from a fixed list / constructed with a certain structure)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test("Word puzzles are pulled from a hardcoded set of words ", () => {
    let alarms = [{
      "hour": 8,
      "minute": 0,
      "active": true,
      uid: 101
    }];

    let currentUser = {
      "puzzle_mode": "word",
      uid: 101
    };

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarms} testing />);
    });

    const numTestInstances = 50;

    // Generate random word in puzzle 50 times, check each random word is in the list
    for (let i = 0; i < numTestInstances; i++) {
      const date = new Date('December 7, 2022 07:59:59');
      vi.setSystemTime(date);

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      const wordPuzzleInput = screen.getByTestId("puzzle-input");
      const wordSolution = screen.getByTestId("word-solution").value;
      expect(wordList).toContainEqual({ "word": wordSolution });

      act(() => {
        fireEvent.change(wordPuzzleInput, {target: {value: wordSolution}});
      });
    };
  });

  test("Math puzzles have 3 operands, two operators", () => {
    let alarms = [{
      "hour": 8,
      "minute": 0,
      "active": true,
      uid: 101
    }];

    let currentUser = {
      "puzzle_mode": "math",
      uid: 101
    };

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarms} testing />);
    });

    const numTestInstances = 10;

    // Check that 10 generated math puzzles are of the specified format
    for (let i = 0; i < numTestInstances; i++) {
      const date = new Date('December 7, 2022 07:59:59');
      vi.setSystemTime(date);

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      const mathPuzzleInput = screen.getByTestId("puzzle-input");
      const mathProblem = screen.getByTestId("math-problem").textContent.slice(0, -4).split(" ");
      const mathSolution = eval(screen.getByTestId("math-problem").textContent.slice(0, -4));

      console.log(mathProblem, mathSolution)

      expect(mathProblem.length).toEqual(5);

      expect([...Array(12).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[2]));
      expect([...Array(12).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[4]));

      expect(["+", "-", "*", "/"]).toContainEqual(mathProblem[1]);
      expect(["+", "-", "*"]).toContainEqual(mathProblem[3]);

      if (mathProblem[1] === "/") {
        expect([...Array(144).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[0]));
      } else {
        expect([...Array(12).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[0]));
      }

      expect([...Array(12).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[2]));
      expect([...Array(12).keys()].map(i => i + 1)).toContainEqual(parseInt(mathProblem[4]));

      act(() => {
        fireEvent.change(mathPuzzleInput, {target: {value: mathSolution}});
      });
    };
  });
});
