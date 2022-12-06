import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AlarmList from './components/AlarmList';
import { act } from 'react-dom/test-utils';

describe('A user should not be able to change the puzzle type while any alarm is ringing', () => {
  beforeEach( () => {
    vi.useFakeTimers()
  })
  test("puzzleMode should stay the same while an alarm is ringing", () => {
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
    // act (() => {
    //   vi.advanceTimersByTime(4000)
    // })
    //act (() => {
    //})
    act( () => {
      fireEvent.submit(submit,{target: [{value: alarm3.hour},{value: alarm3.minute}, {value: 'AM'}]})

    })

    await act(async () => { vi.runOnlyPendingTimers() });
    // const listLength = screen.getByTestId('alarm-list')
    // expect(listLength).equal(3)
    expect(screen.findByText(/2:14 PM/i))
    // await screen.findByText(/1:13 PM/i)

    // await act (async () => {
    //   vi.advanceTimersByTime(4000)
    //   await screen.findByText(/2:14 PM/i)
      
    // })
    // let alarmList2 = [...alarmList,alarm3]
    // alarmList2.push(alarm3)
    // console.log(alarmList2)
    // act (() => {
    //   render(<AlarmList currentUser={currentUser} alarms={alarmList2} testing />)
    // })
    //let result = await screen.findByText(/2:14 PM/i)
    // await waitFor( () => {
    //   expect(screen.getByText(/2:14 PM/i)).toBeInTheDocument()
    // })
    //expect(3).toEqual(3)//.toBeInTheDocument();

    // const ringing2 = screen.getByTestId('ringing')
    // expect(ringing2.textContent).toBe('true')

  })
})

// describe('counter tests', () => {

//   test("Counter should be 0 at the start", () => {
//     render(<App />);
//     expect(2).toBe(2)
//   });

//   test("Counter should increment by one when clicked", async () => {
//     render(<App />);
//     expect(3).toBe(3)
//   });

// });

// describe('counter tests', () => {
    
//   test("Counter should be 0 at the start", () => {
//     render(<App />);
//     expect(screen.getByText('count is: 0')).toBeDefined();
//   });

//   test("Counter should increment by one when clicked", async () => {
//     render(<App />);
//     const counter = screen.getByRole('button');
//     fireEvent.click(counter);
//     expect(await screen.getByText('count is: 1')).toBeDefined();
//   });

// });

