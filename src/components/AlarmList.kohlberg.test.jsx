import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import AlarmList from './AlarmList';
import { act } from 'react-dom/test-utils';


// describe('A user should be able to add an alarm to their list of alarms and have it display enabled', () => {
//     beforeEach( () => {
//         vi.useFakeTimers()
//       })

//     test("When a user sets a new alarm, alarms added to the alarm list should be enabled by default", async () => {
//         let currentUser = {
//             "puzzle_mode": "word",
//             uid: 12345
//         };
//         let alarmList = [];  
//         act(() => {
//             render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
//           });
//         const submit = screen.getByTestId('submit');
//         // const alarmSubmit = screen.getByTestId('alarmSubmit')
//         act(() => {
//             // fireEvent.click(alarmSubmit)
//             fireEvent.submit(submit,{target: [{value: 2}, {value: 0}, {value: 'AM'}]})
//           })
//           // expect(screen.getByText(/2:00 AM/i)).toBeInTheDocument()
//           // expect(await screen.findByText(/2:00 AM/i));
//         // expect(await screen.findByText(/2:00 AM/i))
//     })
//   })
  
  describe("Puzzle should not change if new alarm goes off", () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
      vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
      vi.spyOn(window, "alert").mockImplementation(() => {});
    });
  
    afterEach(cleanup);
  
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
    })


    
    
      
  
    