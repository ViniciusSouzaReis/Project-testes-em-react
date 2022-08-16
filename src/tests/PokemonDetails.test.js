import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('É exibido na tela um h2 com o texto <name> Details', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getTitle = screen.getByRole('heading', {
      name: /Pikachu Details/i, level: 2,
    });
    expect(getTitle).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getSummary = screen.getByRole('heading', {
      name: /summary/i, level: 2,
    });
    expect(getSummary).toBeInTheDocument();
  });

  test('É exibido na tela um texto contendo <summary>', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getSummary = screen.getByText(/This intelligent Pokémon/i);
    expect(getSummary).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getTitle = screen.getByRole('heading', {
      name: /Game Locations of Pikachu/i, level: 2,
    });
    expect(getTitle).toBeInTheDocument();
  });

  test('São exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getImg = screen.getAllByRole('img', { name: /Pikachu location/i });
    const IMG_SRC_ONE = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const IMG_SRC_TWO = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(getImg[0].src).toBe(IMG_SRC_ONE);
    expect(getImg[1].src).toBe(IMG_SRC_TWO);
  });

  test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const getLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(getLink);

    const getLabel = screen.getByLabelText(/Pokémon favoritado/i);
    expect(getLabel).toBeInTheDocument();
  });
});
