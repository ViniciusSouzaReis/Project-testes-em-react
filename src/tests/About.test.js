import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);

    const verifyTitle = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(verifyTitle).toBeInTheDocument();

    const verifyParagraph1 = screen.getByText(/This application/i);
    expect(verifyParagraph1).toBeInTheDocument();

    const verifyParagraph2 = screen.getByText(/One can filter Pokémons/i);
    expect(verifyParagraph2).toBeInTheDocument();

    const checkImg = screen.getByRole('img');
    const imgLink = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(checkImg.src).toBe(imgLink);
  });
});
