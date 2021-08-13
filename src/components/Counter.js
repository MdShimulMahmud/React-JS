import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            {' '}
            <p>{count}</p>
            <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                Click me
            </button>
        </>
    );
}
