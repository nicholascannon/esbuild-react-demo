import React, { useCallback, useState } from 'react';

type PropTypes = {
    message: string;
};

const App = ({ message }: PropTypes): JSX.Element => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((currentCount) => currentCount + 1);
    }, [count]);

    return (
        <>
            <h1>Poop</h1>
            <h1>{message}</h1>
            <h2>Count: {count}</h2>
            <button type='button' onClick={increment}>
                Increment
            </button>
        </>
    );
};

export default App;
