import { render, screen } from '@testing-library/react';
import React from 'react';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import Signup from '../../src/routes/Signup';
import App from '../../src/App';



describe('Signup', () => {
    it('it should render the name when the name is provide', () => {
        render(<App />);

        const heading = screen.getByPlaceholderText('Name')
        expect(heading).toBeInTheDocument(); 
      
    });

    it('it should render the username when the username is provide', () => {
        render(<App />);

        const heading = screen.getByText('Username')
        expect(heading).toBeInTheDocument(); 
      
    });

    it('it should render the password when the password is provide', () => {
        render(<App />);

        const heading = screen.getByPlaceholderText('Password')
        expect(heading).toBeInTheDocument();
    });


    it('it should render Create account button when name is not provided', () => {
        render(<App />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Create account/i);
      
    });
})