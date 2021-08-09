import React from 'react';
import Child from './components/inheritance/Child';
import Emoji from './components/inheritance/Emoji';
<<<<<<< Updated upstream
=======

import Counter from './components/Counter';
>>>>>>> Stashed changes


function App() {
    return (
        <div className="App">
            <Emoji>{({ addEmoji }) => <Child addEmoji={addEmoji} />}</Emoji>
        </div>
    );
}

export default App;
