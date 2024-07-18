import React, {useState, useEffect} from 'react';


// 1) Что будет в логах если кликать на кнопку и почему?
// 2) Как сделать, чтобы Child не ререндерился при увеличении счетчика? Можно менять код.

const Child1 = () => {

    useEffect(() => {
        console.log('child 1 effect')
    })

    return <div>child 1</div>
}

export const Task6 = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prev) => prev + 1);
    }

    useEffect(() => {
        console.log('effect')
    })

    return (
        <div>
            <h6>task 6</h6>
            {counter}
            <button onClick={handleIncrement}>click me</button>
            <Child1 />
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ 1  -
// Объяснение 1  -


// Ответ 2  -
// Объяснение 2  -