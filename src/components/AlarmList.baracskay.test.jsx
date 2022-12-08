import { describe, expect, test, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import AlarmList from "./AlarmList";
import { act } from 'react-dom/test-utils';

describe('When a user selects a puzzle type the given puzzle type changes for all alarms', () => {
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
        "puzzle_mode": "word",
        uid: 12345
    };

    let alarmList = [alarm1, alarm2];
    act(() => {
        render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
    })
    const slider = screen.getByTestId('slider');

    test('check initial state (should always pass, but is a baseline)', () => {


        expect(slider.checked).toBe(false);
    })

    test('check flipping state', () => {
        act(() => {
            fireEvent.click(slider)
        })

        expect(slider.checked).toBe(true)
    })

    test('flipping random number of times', () => {
        let flips = Math.ceil(Math.random() * 12);
        let state = true;
        for (let i = 0; i < flips; i++) {
            state = !state;
            act(() => {
                fireEvent.click(slider)
            })
        }
        expect(slider.checked).toBe(state)
    })


})

describe('The alarm audio should be triggered when an alarm expires', () => {
    const date = new Date('October 7, 2022 12:11:59')
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
        "puzzle_mode": "word",
        uid: 12345
    };

    let alarmList = [alarm1, alarm2];

    beforeEach(() => {
        vi.useFakeTimers()
      })

    test('alarm is not ringing', () => {
        vi.setSystemTime(date)
        act( () => {
            render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
          })
        const ringing = screen.getByTestId('ringing');
        const alarm = screen.getByTestId('alarm');

        expect(ringing.textContent).toBe('false');

    })

    test('alarm rings', () => {
        vi.setSystemTime(date)
        
        act( () => {
            render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
            
          })
        act( () => {
            vi.advanceTimersByTime(4000);
        })
        const ringing = screen.getByTestId('ringing');
        const alarm = screen.getByTestId('alarm');
        

        expect(ringing.textContent).toBe('true');
       
    })
})