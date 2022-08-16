import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found',
    () => {
      renderWithRouter(<NotFound />);

      const verifyText = screen.getByRole('heading', {
        name: /Page requested not found/i, level: 2 });
      expect(verifyText).toBeInTheDocument();
    });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const getImg = screen.getByRole('img', { name: /Pikachu crying because/i });
    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(getImg.src).toBe(imgSrc);
  });
});
