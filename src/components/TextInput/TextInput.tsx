import React from 'react';

interface TextInputProps {
    inputLabel?: string;
    inputType?: string;
}

const TextInput = (props: TextInputProps) => {
    const { inputLabel, inputType } = props;
    return (
        <>
            <label htmlFor={inputLabel}>{inputLabel}</label>
            <input type={inputType} name={inputLabel} />
        </>
    );
};

export default TextInput;
