import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa aplicação', () => {
  test('verifica se o input é renderizado', () => {
    render(<App />);
    const inputElement = screen.getByLabelText('Digite uma cor:');
    expect(inputElement).toBeInTheDocument();
  });

  test('verifica se o botão é renderizado', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('se a cor digitada no input é enviada para uma `li`', () => {
    render(<App />)
    const inputElement = screen.getByLabelText('Digite uma cor:');
    expect(inputElement).toBeInTheDocument();
    userEvent.type(inputElement, 'green');

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement);

    const colorElement = screen.getByTestId('color');
    expect(colorElement).toBeInTheDocument()
  });
});
