import { render, screen } from '@testing-library/react';
import QrContainer from './App';

test('renders learn react link', () => {
  render(<QrContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
