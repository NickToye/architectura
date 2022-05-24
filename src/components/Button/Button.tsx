import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { children, onClick } = props;

    return (
        <button
            data-testid='button-component'
            onClick={onClick}
            className='bg-primary'
        >
            {children}
        </button>
    );
};

export default Button;
