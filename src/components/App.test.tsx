import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App splash screen', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('splash-screen').length).toBe(1);
});
