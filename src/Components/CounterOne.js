import React from 'react'
import useCounter from '../Hooks/useCounter'
const CounterOne = () => {
    const [count, increment, decrement, reset] = useCounter(0, 10);

    return (
        <>
            <h1>count value:{count}</h1>
            <button onClick={() => {
                increment(5);
            }}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default CounterOne