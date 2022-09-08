import React from 'react'
import useCounter from '../Hooks/useCounter'

const CounterTwo = () => {
    const [count, increment, decrement, reset] = useCounter(20, 30);
    return (
        <div>
            <h2>CounterTwo-{count}</h2>
            <button onClick={() => {
                increment();
            }}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default CounterTwo