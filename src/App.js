import React, { useEffect, useRef } from 'react';
import ForwardInput from './components/ShowInput';

function App() {
    const inputRef = useRef('');
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <ForwardInput ref={inputRef} type="text" placeholder="write here" />
        </div>
    );
}
export default App;
