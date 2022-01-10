import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders demo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Démo bzq-react-modal/i);
  expect(linkElement).toBeInTheDocument();
});
