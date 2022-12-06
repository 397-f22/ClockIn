import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen,  } from '@testing-library/react';
import AlarmList from './components/AlarmList';


describe('Alarm should be triggered at correct time.', () => {
  beforeEach( () => {
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

    render(<AlarmList currentUser={currentUser} alarms={alarms} />);
    const audio = screen.getByTestId('alarm')
    // past alarm not triggered
    expect(audio.paused).toBe(true)

    // add new alarm
    const submit = screen.getByTestId('submit')
    fireEvent.submit(submit,{target: [{value: 12},{value: 9}, {value: 'AM'}]})

    // new alarm added
    expect(screen.findByText(/12:09 AM/i))
    // audio not triggered
    expect(audio.paused).toBe(true)

  })

})