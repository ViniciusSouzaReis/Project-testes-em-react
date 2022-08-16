import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Exiba na tela a mensagem "No favorite pokemon found" caso não tenha pokemons',
    () => {
      renderWithRouter(<FavoritePokemons />);

      const verifyText = screen.getByText(/No favorite pokemon found/i);
      expect(verifyText).toBeInTheDocument();
    });
});
