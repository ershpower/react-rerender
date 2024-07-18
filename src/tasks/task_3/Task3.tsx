import React, {useEffect, useLayoutEffect} from 'react';

// В какой последовательности выведутся логи?
export const Task3 = () => {

    useEffect(() => {
        console.log("effect")
    }, [])

    useLayoutEffect(() => {
        console.log("layout effect")
    }, [])

    return (
        <div>
            <h6>task 3 </h6>
        </div>
    );
};


// В объяснение писать все, что бы ты сказал/а если бы это была задача с собеса.

// Ответ  -
// Объяснение  -