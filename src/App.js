import React from 'react';
import Hover from './components/Hover';
import Wrapper from './components/Wrapper';
import Counter from './Counter';

function App() {
    return (
        <div className="App">
            <Wrapper
                name={(count, handleClick) => <Counter count={count} handleClick={handleClick} />}
            />
            <Wrapper
                name={(count, handleClick) => <Hover count={count} handleClick={handleClick} />}
            />
        </div>
    );
}

export default App;
