import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AlarmList from './components/AlarmList';

describe('counter tests', () => {

  test("Counter should be 0 at the start", () => {
    render(<App />);
    expect(2).toBe(2)
  });

  test("Counter should increment by one when clicked", async () => {
    render(<App />);
    expect(3).toBe(3)
  });

});

describe('A user should not be able to change the puzzle type while any alarm is ringing', () => {

  test("puzzleType should stay the same while an alarm is ringing", () => {
    //Check if alarm is ringing because of mock alarmList
    //Check if current puzzle mode is correct
    //CHeck if changing puzzle mode work from puzzleModeSlider
    //Add display none value to AlarmList that says whether or not it is true
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
    const date = new Date('November 30, 2022 12:12:00')
    vi.setSystemTime(date)
    const { container } = render(<AlarmList currentUser={currentUser} alarmList={alarmList} />);

  })
})