import React, {useEffect} from 'react';

// Необходимо определить в какой последовательности будут логи.

const Child2 = () => {
    console.log('child2-1');
    useEffect(() => {
        console.log('child2-2')
    }, [])

    return <div>child2</div>
}

const Child1 = () => {
    console.log('child1-1');
    useEffect(() => {
        console.log('child1-2')
    }, [])

    return <div>
        <Child2/>
    </div>
}

export const Task1 = () => {
    return (
        <div>
            <h6>task 1</h6>
            <Child1/>
        </div>
    );
};

// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ -

// Обяснение -