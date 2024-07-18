import React, {useEffect, useLayoutEffect} from 'react';

// В какой последовательности и почему будут логи?

const Child1 = () => {

    console.log('child 1')

    useEffect(() => {
        console.log("child 1 effect")
    }, [])

    useLayoutEffect(() => {
        console.log("child 1 layout effect")
    }, [])

    return <div></div>
}

export const Task4 = () => {

    useEffect(() => {
        console.log("effect")
    }, [])

    useLayoutEffect(() => {
        console.log("layout effect")
    }, [])

    return (
        <div>
            <h6>task 4</h6>
            <Child1/>
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ  -
// Объяснение  -