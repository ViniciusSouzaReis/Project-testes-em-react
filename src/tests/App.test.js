import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    const favoritePokemon = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoritePokemon).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada na URL / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('Teste se a aplicação é redirecionada na URL /about ao clicar no link About',
    () => {
      const { history } = renderWithRouter(<App />);

      const aboutLink = screen.getByRole('link', { name: /about/i });
      userEvent.click(aboutLink);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/about');
    });

  test('Teste se a aplicação é redirecionada a /favorites ao clicar no link Favoritos',
    () => {
      const { history } = renderWithRouter(<App />);

      const favoritePokemon = screen.getByRole('link', { name: /Favorite Pokémons/i });
      userEvent.click(favoritePokemon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/favorites');
    });

  test('Aplicação é redirecionada para a página Not Found  em um link desconhecido',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');

      const notFoundText = screen.getByRole('heading', {
        name: /Page requested not found/i, level: 2 });
      expect(notFoundText).toBeInTheDocument();
    });
});
