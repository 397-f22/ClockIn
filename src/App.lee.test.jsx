import { beforeEach, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { useDbData, useAuthState, useDbUpdate } from './utils/firebase';

const mockData = {
    "users": {},
    "alarms": {}
};
vi.mock('./utils/firebase');

beforeEach(() => {
    useDbUpdate.mockReturnValue([() => null, null])
})

describe('user login', () => {
    it('shows Sign In if not logged in', () => {
        useDbData.mockReturnValue([mockData, null]);
        useAuthState.mockReturnValue([null]);
        render(<App />);
        screen.getByText(/Sign In/i);
    });

    it('shows Sign Out if logged in', () => {
        useDbData.mockReturnValue([mockData, null]);
        useAuthState.mockReturnValue([{ displayName: 'Joe', uid: 'hi' }]);
        render(<App />);
        screen.getByText(/Sign Out/i);
    });
});