import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AlarmList from './components/AlarmList';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';


describe('Alarm should be triggered at correct time.', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })
    test("Alarms added to be in the past should not trigger", async () => {

        let alarms = [{
            "hour": 11,
            "minute": 10,
            "active": false,
            uid: 12345
        }];

        let currentUser = {
            "puzzle_mode": "math",
            uid: 12345
        }

        const date = new Date('November 30, 2022 12:11:59')
        vi.setSystemTime(date)

        act(() =>
            render(<AlarmList currentUser={currentUser} alarms={alarms} testing/>)
        )
        const audio = screen.getByTestId('alarm')
        act(() =>
            vi.advanceTimersByTime(2000)
        )
        // past alarm not triggered
        expect(audio.paused).toBe(true)

        // add new alarm
        const submit = screen.getByTestId('submit')
        act(() =>
            fireEvent.submit(submit, { target: [{ value: 12 }, { value: 9 }, { value: 'AM' }] })
        )

        // new alarm added
        // await screen.findByText(/12:09 AM/i);
        // expect(screen.findByText(/12:09 AM/i))

        // audio not triggered
        expect(audio.paused).toBe(true)

    })

})

describe('A user should not be able to change the puzzle type while any alarm is ringing', () => {
    beforeEach( () => {
      vi.useFakeTimers()
    })
    test("puzzleMode should stay the same while an alarm is ringing", () => {
      let alarm1 = {
        "hour": 12,
        "minute": 12,
        "active": true,
        uid: 12345
      };
      let alarm2 = {
        "hour": 13,
        "minute": 13,
        "active": true,
        uid: 12345
      };
  
      let currentUser = {
        "puzzle_mode": "math",
        uid: 12345
      }
  
      let alarmList = [alarm1, alarm2]
      const date = new Date('November 30, 2022 12:11:59')
      vi.setSystemTime(date)
      act( () => {
        render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
      })
      
      
      const ringing = screen.getByTestId('ringing')
      
      expect(ringing.textContent).toBe('false')
      act (() => {
        vi.advanceTimersByTime(4000)
      })
      
      expect(ringing.textContent).toBe('true')
      
      
      const mathProblem = screen.getByTestId('math-problem')
      const puzzleInput = screen.getByTestId('puzzle-input')
      const solution = eval(mathProblem.innerHTML.substring(0, mathProblem.innerHTML.length - 4))
      fireEvent.change(puzzleInput, { target: { value: solution } });
      
      act (() => {
        vi.advanceTimersByTime(4000)
      })
      
      expect(ringing.textContent).toBe('false')
  
    })
  })

