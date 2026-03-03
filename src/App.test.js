// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HashCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HashCore/i);
    expect(titleElement).toBeInTheDocument();
});
