import { useEffect, useState } from 'react';

function FunctionalCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You have Clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                Click me
            </button>
        </div>
    );
}
export default FunctionalCounter;
