import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('renderiza o título principal da landing', () => {
  render(<Hero />);
  const headingElement = screen.getByRole('heading', {
    name: /psicosense: organize sua rotina clínica com mais praticidade/i
  });
  expect(headingElement).toBeInTheDocument();
});
