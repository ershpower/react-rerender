import React, {useState, useEffect} from 'react';


// Что будет в логах если кликать на кнопку и почему?
export const Task5 = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prev) => prev + 1);
    }

    useEffect(() => {
        console.log('effect')
    })

    return (
        <div>
            <h6>task 5</h6>
            {counter}
            <button onClick={handleIncrement}>click me</button>
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ  -
// Объяснение  -