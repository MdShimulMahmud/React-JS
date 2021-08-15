import { useEffect, useState } from 'react';

function FunctionalCounter() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('Title changed');
        document.title = `You have Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('Time changed');
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                Click me
            </button>
        </div>
    );
}
export default FunctionalCounter;
