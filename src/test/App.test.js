import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa aplicação', () => {
  test('verifica se o input é renderizado', () => {
    render(<App />);
  });
})
