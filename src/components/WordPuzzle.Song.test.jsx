import AlarmList from './AlarmList';
import { act } from 'react-dom/test-utils';
import { describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Alarm should not stop for incorrect puzzle answers", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
    vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  test("If an answer to a puzzle is incorrect, the alarm should not stop", () => {
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

    const date = new Date('December 7, 2022 07:59:59')
    vi.setSystemTime(date);

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarms} testing />);
    });

    const ringing = screen.getByTestId("ringing");
    expect(ringing.textContent).toBe("false");

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(ringing.textContent).toBe("true");

    const wordPuzzleInput = screen.getByTestId("puzzle-input");
    const wordSolution = screen.getByTestId("word-solution");

    act(() => {
      fireEvent.change(wordPuzzleInput, {target: {value: wordSolution.value}});
    });

    expect(ringing.textContent).toBe("false");
  });
})
