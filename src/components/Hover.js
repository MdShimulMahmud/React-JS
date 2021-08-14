import { useState } from 'react';

function Hover() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 onMouseOver={() => setCount((prevState) => prevState + 1)} onFocus>
                {' '}
                hover {count} here
            </h2>
        </div>
    );
}

export default Hover;
