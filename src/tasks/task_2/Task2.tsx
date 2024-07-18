import React, {useEffect, useState} from 'react';

// 1) Какие и в какой последовательности будут логи до того, как нажать на кнопку?
// 2) Какие и в какой последовательности будут логи после того как нажать на кноку 1 раз?
const Child1 = () => {

    console.log('child 1');

    useEffect(() => {
        console.log('child 1 effect');
    }, [])

    return <div>child1</div>;
}

export const Task2 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('effect');
    }, [])

    const handleIncrement = () => {
        setCounter((prev) => prev + 1);
    }

    return (
        <div>
            <h6>task 2</h6>
            {counter}
            <button onClick={handleIncrement}>click me</button>
            <Child1/>
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ 1 -
// Объяснение 1 -

// Ответ 2 -
// Объяснение 2 -