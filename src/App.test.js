import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/My Todo App/i);
  expect(titleElement).toBeInTheDocument();
});
