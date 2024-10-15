import { render, screen } from '@testing-library/react';
import Login from '../../src/routes/Login';
import React from 'react';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import App from '../../src/App';


describe('Login', () => {
    it('it should render the name when the name is provide', () => {
        render(<App />);

        const heading = screen.getAllByText('Username');
        expect(heading).toBeInTheDocument();
       
    });


    it('it should render login button when name is not provided', () => {
        render(<App />);

        const button = screen.getAllByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Login/i);
      
    });
})