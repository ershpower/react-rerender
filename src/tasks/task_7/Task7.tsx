import React, {useState, useEffect, FC} from 'react';


// 1) Что будет в логах если кликать на кнопку и почему?
// 2) Как сделать, чтобы Child не ререндерился при увеличении счетчика? Можно менять код.

interface  IChild1Props {
    onIncrement: () => void;
}
const Child1: FC<IChild1Props> = ({onIncrement}) => {

    useEffect(() => {
        console.log('child 1 effect')
    })

    return <div>child 1
        <button onClick={onIncrement}>click me</button>
    </div>
}

export const Task7 = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prev) => prev + 1);
    }

    useEffect(() => {
        console.log('effect')
    })

    return (
        <div>
            <h6>task 7</h6>
            {counter}
            <Child1 onIncrement={handleIncrement} />
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ 1  -
// Объяснение 1  -


// Ответ 2  -
// Объяснение 2  -