import { it, vi } from 'vitest';
import { App } from './App';
import { useJsonQuery } from '../utilities/fetch';

vi.mock('../utilities/fetch');

const mockUser = {
  "title": "CS Courses for 1850-1851",
  "courses": { }
};

it('shows the schedule year', () => {
  useJsonQuery.mockReturnValue([mockSchedule, false, null]);
  render(<App />);
  screen.getByText(/1850-1851/);
});