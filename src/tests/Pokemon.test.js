import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);

    const getImg = screen.getByRole('img', { name: /Pikachu sprite/i });
    const IMG_SRC = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(getImg.src).toBe(IMG_SRC);
  });

  test('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);

    const getImg = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(getImg).toBeInTheDocument();
  });

  test('A imagem de favorito star possui o src /star-icon.svg', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getText = screen.getByLabelText(/Pokémon favoritado/i);
    userEvent.click(getText);

    const getImg = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(getImg.src).toBe('http://localhost/star-icon.svg');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const getText = screen.getByTestId('pokemon-type');
    console.log(getText);
    expect(getText).toHaveTextContent('Electric');
  });
});
