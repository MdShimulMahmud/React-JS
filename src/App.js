import React, { useCallback, useMemo, useState } from 'react';
import Name from './components/hooks/useCallback/Name';
import ShowCounter from './components/hooks/useCallback/ShowCounter';

function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const handleClickOne = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleClickTwo = useCallback(() => {
        setCount1((prevCount1) => prevCount1 + 2);
    }, []);

    const printName = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 1000000; i += 1) {
            arr[i] = 0;
        }

        return count % 2 === 0;
    }, [count]);

    return (
        <div>
            <Name />
            <span>{printName ? 'Even' : 'Odd'}</span>
            <ShowCounter count={count} handleClick={handleClickOne} title="Counter 1" />
            <hr />
            <ShowCounter count={count1} handleClick={handleClickTwo} title="Counter 2" />
        </div>
    );
}
export default App;
