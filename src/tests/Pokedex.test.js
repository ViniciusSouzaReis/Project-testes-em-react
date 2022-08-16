import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('contém um heading h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const buttonNames1 = [
      'All',
      'Electric',
      'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    buttonNames1.forEach((type) => {
      const verifyBtn = screen.getByRole('button', { name: type });
      expect(verifyBtn).toBeInTheDocument();
    });
  });

  test('Os botões de filtragem por tipo possuem data-test-id exceto All', () => {
    renderWithRouter(<App />);

    const verifyBtn = screen.getAllByTestId('pokemon-type-button');
    verifyBtn.forEach((btn) => {
      expect(btn).toBeInTheDocument();
    });
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const getAllBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(getAllBtn);
    const filterPokemons = jest.fn();

    filterPokemons('all');
    expect(filterPokemons).toHaveBeenCalledWith('all');
  });
});
