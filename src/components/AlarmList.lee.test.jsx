import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AlarmList from './AlarmList';
import { act } from 'react-dom/test-utils';

describe('A user should be able to delete an alarm from their list of alarms', () => {
  beforeEach( () => {
    vi.useFakeTimers()
  })
  test("When a user removes an alarm from their alarm list, it is no longer visible on their home page", async () => {

    let alarm1 = {
      "hour": 12,
      "minute": 12,
      "active": false,
      uid: 12345,
      alarm_id: "0"
    };
    let alarm2 = {
      "hour": 13,
      "minute": 13,
      "active": false,
      uid: 12345,
      alarm_id: "1"
    };
    let alarm3 = {
      "hour": 14,
      "minute": 14,
      "active": false,
      uid: 12345,
      alarm_id: "2"
    };

    let currentUser = {
      "puzzle_mode": "word",
      uid: 12345
    }

    let alarmList = [alarm1, alarm2, alarm3]
    const date = new Date('November 30, 2022 12:11:59')
    vi.setSystemTime(date)

    act(() => {
      render(<AlarmList currentUser={currentUser} alarms={alarmList} testing />);
    })

    expect(screen.queryByText(/2:14 PM/i));

    const del = screen.getByTestId('delete-2')
    act( () => {
      fireEvent.click(del);
    })

    await act(async () => { vi.runOnlyPendingTimers() });
    expect(screen.queryByText(/2:14 PM/i)).toBeNull();

  })
})
