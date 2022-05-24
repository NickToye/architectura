import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from '../TextInput';

test('renders correct TextInput label', () => {
    render(<TextInput inputLabel='Fizz' />);
    const textLabel = screen.getByText(/Fizz/i);
    expect(textLabel.textContent).toBe('Fizz');
});
