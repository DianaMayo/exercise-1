import { render, screen } from '@testing-library/react';
import React from 'react';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import Dashboard from '../../src/routes/Dashboard';
import App from '../../src/App';


describe('Dashboard', () => {

    it('it should render Dashboard button when new task is not provided', () => {
        render(<App />);

        const placeholder = screen.getByPlaceholderText('New task to do...');
        expect(placeholder).toBeInTheDocument();
        expect(placeholder).toHaveTextContent('');      
      
    });
})