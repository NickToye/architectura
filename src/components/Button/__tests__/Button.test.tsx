// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('renders Button component with `Click Me` text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

const expected = true;
const actual = false;

test('it works', () => {
    expect(actual).toBe(expected);
});
