import React, { useState } from 'react';

const FizzBuzz = ({ maxValue }) => {
    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        if (number < maxValue) {
            setNumber(number + 1);
        }
    };

    const decrementNumber = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const getFizzBuzzLabel = () => {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else {
            return number;
        }
    };

    return (
        <div>
            <h1>FizzBuzz</h1>
            <p>Nombre: {getFizzBuzzLabel()}</p>
            <button onClick={decrementNumber} disabled={number === 0}>Decrement</button>
            <button onClick={incrementNumber} disabled={number === maxValue}>Increment</button>
        </div>
    );
}

export default FizzBuzz;
