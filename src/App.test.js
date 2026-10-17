// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftPound title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftPound/i);
    expect(titleElement).toBeInTheDocument();
});
