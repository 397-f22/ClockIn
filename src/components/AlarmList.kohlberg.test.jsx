import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import AlarmList from './AlarmList';
import { act } from 'react-dom/test-utils';


describe('When an alarm goes off, the puzzle matches the selected puzzle type', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
    vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(cleanup);

  test("math puzzle", async () => {
      let alarmList = [{
        "hour": 6,
        "minute": 0,
        "active": true,
        uid: 12345
      },
      {
        "hour": 6,
        "minute": 1,
        "active": true,
        uid: 12345
      }
      ];

      let currentUser = {
        "puzzle_mode": "math",
        uid: 12345
      };
  
      const date = new Date('December 1, 2022 05:59:59');
      vi.setSystemTime(date);
  
      act(() => {
        render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
      });
      const ringing = screen.getByTestId("ringing");
      expect(ringing.textContent).toBe("false");

      // Time of first alarm
      act(() => {
        vi.advanceTimersByTime(1000);
      });
  
      // problem should be math problem
      expect(screen.getByTestId("math-problem"))
    })

    test("word puzzle", async () => {
      let alarmList = [{
        "hour": 6,
        "minute": 0,
        "active": true,
        uid: 12345
      },
      {
        "hour": 6,
        "minute": 1,
        "active": true,
        uid: 12345
      }
      ];

      let currentUser = {
        "puzzle_mode": "word",
        uid: 12345
      };
  
      const date = new Date('December 1, 2022 05:59:59');
      vi.setSystemTime(date);
  
      act(() => {
        render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
      });
      const ringing = screen.getByTestId("ringing");
      expect(ringing.textContent).toBe("false");

      // Time of first alarm
      act(() => {
        vi.advanceTimersByTime(1000);
      });
  
      // problem should be word problem
      expect(screen.getByTestId("word-solution"))
    })

    test("switch from word to math puzzle", async () => {
      let alarmList = [{
        "hour": 6,
        "minute": 0,
        "active": true,
        uid: 12345
      },
      {
        "hour": 6,
        "minute": 1,
        "active": true,
        uid: 12345
      }
      ];

      let currentUser = {
        "puzzle_mode": "word",
        uid: 12345
      };
  
      const date = new Date('December 1, 2022 05:59:59');
      vi.setSystemTime(date);
  
      act(() => {
        render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
      });
      const ringing = screen.getByTestId("ringing");
      expect(ringing.textContent).toBe("false");

      // Time of first alarm
      act(() => {
        vi.advanceTimersByTime(1000);
      });
  
      // problem should be word problem
      let sol = screen.getByTestId("word-solution")
      const input = screen.getByTestId("puzzle-input");
        act(() => {
          fireEvent.change(input, {target: {value: sol.value}});
        });

      // switch type
      const slider = screen.getByTestId('slider');
      act(() => {
        fireEvent.click(slider)
      })

      // Time of second alarm
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      // problem should be math problem
      expect(screen.getByTestId("math-problem"))
      
    })
  })
  
  describe("Puzzle should not change if new alarm goes off", () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
      vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
      vi.spyOn(window, "alert").mockImplementation(() => {});
    });
  
    afterEach(cleanup);
  
      test("If the first puzzle is not solved when it reaches another time, the puzzle stays the same", async () => {
        let alarmList = [{
          "hour": 6,
          "minute": 0,
          "active": true,
          uid: 12345
        },
        {
          "hour": 6,
          "minute": 1,
          "active": true,
          uid: 12345
        }
      ];
  
        let currentUser = {
          "puzzle_mode": "word",
          uid: 12345
        };
    
        const date = new Date('December 1, 2022 05:59:59');
        vi.setSystemTime(date);
    
        act(() => {
          render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
        });
        const ringing = screen.getByTestId("ringing");
        expect(ringing.textContent).toBe("false");

        // Time of first alarm
        act(() => {
          vi.advanceTimersByTime(1000);
        });
    
        // First alarm goes off, this is the solution to the problem
        const wordSolutionOne = screen.getByTestId("word-solution");
    
        // alarm is rining
        expect(ringing.textContent).toBe("true");

        // Time of second alarm
        act(() => {
          vi.advanceTimersByTime(1000);
        });

        // Second alarm goes off, this is the solution to the problem
        const wordSolutionTwo = screen.getByTestId("word-solution");

        // alarm is rining
        expect(ringing.textContent).toBe("true");

        // solutions match
        expect(wordSolutionOne).toEqual(wordSolutionTwo);
      })
      test("If the first puzzle is solved when it reaches another time, the new puzzle is different", async () => {
        let alarmList = [{
          "hour": 6,
          "minute": 0,
          "active": true,
          uid: 12345
        },
        {
          "hour": 6,
          "minute": 1,
          "active": true,
          uid: 12345
        }
      ];
  
        let currentUser = {
          "puzzle_mode": "word",
          uid: 12345
        };
    
        const date = new Date('December 1, 2022 05:59:59');
        vi.setSystemTime(date);
    
        act(() => {
          render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
        });
        const ringing = screen.getByTestId("ringing");
        expect(ringing.textContent).toBe("false");

        // Time of first alarm
        act(() => {
          vi.advanceTimersByTime(1000);
        });
    
        // First alarm goes off, this is the solution to the problem
        const wordSolutionOne = screen.getByTestId("word-solution");
    
        // alarm is rining
        expect(ringing.textContent).toBe("true");

        // alarm stops when solved
        const input1 = screen.getByTestId("puzzle-input");
        act(() => {
          fireEvent.change(input1, {target: {value: wordSolutionOne.value}});
        });

        // no solution
        expect(ringing.textContent).toBe("false");
        expect(() => (screen.getByTestId("word-solution")).toThrow())

        // Time of second alarm
        act(() => {
          vi.advanceTimersByTime(1000);
        });

        // Second alarm goes off, this is the solution to the problem
        const wordSolutionTwo = screen.getByTestId("word-solution");

        // alarm is rining
        expect(ringing.textContent).toBe("true");

      })
    })


    
    
      
  
    