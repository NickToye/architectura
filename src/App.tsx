import React from 'react';

import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';

function App() {
    const DoThis = (e: string) => {
        console.log(e);
    };
    return (
        <div className='App'>
            <h1>Architectura</h1>
            <TextInput inputLabel='username' />
            <TextInput inputLabel='password' inputType='password' />
            <Button onClick={() => DoThis('dda')}>Click me</Button>
        </div>
    );
}

export default App;
