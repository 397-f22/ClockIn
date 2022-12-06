import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AlarmList from './components/AlarmList';
import { act } from 'react-dom/test-utils';

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
      "puzzle_mode": "word",
      uid: 12345
    }

    let alarmList = [alarm1, alarm2]
    const date = new Date('November 30, 2022 12:11:59')
    vi.setSystemTime(date)
    act( () => {
      render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
    })
    const slider = screen.getByTestId('slider')
    const mode = screen.getByTestId('puzzleMode')
    const ringing = screen.getByTestId('ringing')
    expect(mode.textContent).toBe('word')
    expect(ringing.textContent).toBe('false')
    act (() => {
      vi.advanceTimersByTime(4000)
    })
    expect(mode.textContent).toBe('word')
    expect(ringing.textContent).toBe('true')
    //act (() => {
    //})
    act(() => {
      fireEvent.click(slider,{target: {checked: true}})
      fireEvent.click(slider,{target: {checked: false}})
    })
    expect(mode.textContent).toBe('word')
    expect(ringing.textContent).toBe('true')

  })
})
describe('A user should be able to add an alarm to their list of alarms and have it display', () => {
  beforeEach( () => {
    vi.useFakeTimers()
  })
  test("When a user adds an alarm to an alarm list it is then displayed on the alarm page", async () => {

    let alarm1 = {
      "hour": 12,
      "minute": 12,
      "active": false,
      uid: 12345
    };
    let alarm2 = {
      "hour": 13,
      "minute": 13,
      "active": false,
      uid: 12345
    };
    let alarm3 = {
      "hour": 14,
      "minute": 14,
      "active": false,
      uid: 12345
    };

    let currentUser = {
      "puzzle_mode": "word",
      uid: 12345
    }

    let alarmList = [alarm1, alarm2]
    const date = new Date('November 30, 2022 12:11:59')
    vi.setSystemTime(date)

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
    })
    const submit = screen.getByTestId('submit')
    act( () => {
      fireEvent.submit(submit,{target: [{value: alarm3.hour},{value: alarm3.minute}, {value: 'AM'}]})

    })

    await act(async () => { vi.runOnlyPendingTimers() });
    expect(screen.findByText(/2:14 PM/i))

  })
})


