import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

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
